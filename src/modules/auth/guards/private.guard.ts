import { IAuthPayload } from '@/common/interfaces/auth.interfaces';
import { IS_PUBLIC_KEY } from '@/modules/auth/decorators/public.decorator';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model } from 'mongoose';
import { User } from '../../user/entities/user.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // public guard handler
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    let token = this.extractTokenFromHeader(request);

    if (!token) token = this.extractTokenFromCookie(request);

    if (!token) throw new UnauthorizedException();

    try {
      const payload: IAuthPayload = await this.jwtService.verifyAsync(token);
      const user = await this.userModel.findOne({ _id: payload?._id });

      // check user exist or not
      if (!user) throw new UnauthorizedException();

      request['user'] = user.toObject();
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private extractTokenFromCookie(request: Request): string | undefined {
    const token = request.cookies?.token;
    return token || undefined;
  }
}
