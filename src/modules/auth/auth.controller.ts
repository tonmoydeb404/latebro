import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/login')
  login(@Body() dto: LoginDto) {
    return this.service.login(dto);
  }

  @Post('/register')
  register(@Body() dto: RegisterDto) {
    return this.service.register(dto);
  }
}
