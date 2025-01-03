import {
  IAuthPayload,
  IAuthResponse,
} from '@/common/interfaces/auth.interfaces';
import { HashService } from '@/common/services/hash.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResumeService } from '../resume/services/resume.service';
import { User } from '../user/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly hashService: HashService,
    private readonly jwtService: JwtService,
    private readonly resumeService: ResumeService,
  ) {}

  async generateAuthToken(user: User) {
    const payload: IAuthPayload = {
      _id: String(user._id),
    };
    const token = this.jwtService.sign(payload);

    return { payload, token };
  }

  // Controller Specific ----------------------------------------------------------------------

  async login(dto: LoginDto): Promise<IAuthResponse> {
    const { email, password } = dto;
    const entity = await this.userModel.findOne({ email });

    if (!entity) throw new NotFoundException('User account not found');

    const passwordMatch = await this.hashService.compare(
      password,
      entity.password,
    );

    if (!passwordMatch)
      throw new UnauthorizedException('Invalid password or email');

    const { payload, token } = await this.generateAuthToken(entity);

    const user = entity.toObject();
    delete user.password;

    return { user, payload, token };
  }

  async register(dto: RegisterDto): Promise<IAuthResponse> {
    const { email, password } = dto;

    let entity = await this.userModel.findOne({ email });

    if (entity)
      throw new BadRequestException(
        'User account already exists with this email',
      );

    entity = new this.userModel({ email, password });

    await entity.save();

    const { payload, token } = await this.generateAuthToken(entity);

    const user = entity.toObject();
    delete user.password;

    await this.resumeService.create(String(entity._id), {
      title: 'My Resume',
    });

    // console.log({ resume });

    return { payload, token, user };
  }

  async refresh(userId: string): Promise<IAuthResponse> {
    let entity = await this.userModel.findOne({ _id: userId });

    if (!entity) throw new UnauthorizedException('User account not exists');

    const { payload, token } = await this.generateAuthToken(entity);

    const user = entity.toObject();
    delete user.password;

    return { payload, token, user };
  }
}
