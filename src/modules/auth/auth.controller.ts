import { Public } from '@/modules/auth/decorators/public.decorator';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { cookieConfig } from './config/cookie.config';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Public()
  @Post('/login')
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const results = await this.service.login(dto);

    res.cookie('token', results.token, cookieConfig);

    return results;
  }

  @Public()
  @Post('/register')
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const results = await this.service.register(dto);

    res.cookie('token', results.token, cookieConfig);

    return results;
  }
}
