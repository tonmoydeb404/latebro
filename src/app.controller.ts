import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './modules/auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version(VERSION_NEUTRAL)
  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Version(VERSION_NEUTRAL)
  @Public()
  @Get('/health')
  getHealth(): string {
    return this.appService.getHealth();
  }
}
