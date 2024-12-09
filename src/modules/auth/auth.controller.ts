import { getDomain } from '@/common/utills/request';
import { Public } from '@/modules/auth/decorators/public.decorator';
import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
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
    @Req() req: Request,
  ) {
    const results = await this.service.login(dto);
    res.cookie('token', results.token, {
      ...cookieConfig,
      domain: getDomain(req),
    });
    return results;
  }

  @Public()
  @Post('/register')
  async register(
    @Body() dto: RegisterDto,
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ) {
    const results = await this.service.register(dto);
    res.cookie('token', results.token, {
      ...cookieConfig,
      domain: getDomain(req),
    });
    return results;
  }

  @Get('/refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const results = await this.service.refresh(String(req.user._id));
    res.cookie('token', results.token, {
      ...cookieConfig,
      domain: getDomain(req),
    });
    return results;
  }

  @Post('/logout')
  async logout(@Res({ passthrough: true }) res: Response, @Req() req: Request) {
    res.clearCookie('token', {
      ...cookieConfig,
      domain: getDomain(req),
    });

    return true;
  }
}
