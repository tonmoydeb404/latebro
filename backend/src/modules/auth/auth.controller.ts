import { Public } from '@/modules/auth/decorators/public.decorator';
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Public()
  @Post('/login')
  async login(@Body() dto: LoginDto) {
    const results = await this.service.login(dto);
    return results;
  }

  @Public()
  @Post('/register')
  async register(@Body() dto: RegisterDto) {
    const results = await this.service.register(dto);
    return results;
  }

  @Get('/refresh')
  async refresh(@Req() req: Request) {
    const results = await this.service.refresh(String(req.user._id));
    return results;
  }
}
