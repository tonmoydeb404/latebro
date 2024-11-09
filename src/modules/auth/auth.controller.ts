import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/login')
  login(dto: LoginDto) {
    return this.service.login(dto);
  }

  @Post('/register')
  register(dto: RegisterDto) {
    return this.service.register(dto);
  }
}
