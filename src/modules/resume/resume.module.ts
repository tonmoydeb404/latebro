import { Module } from '@nestjs/common';
import { ResumeController } from './controllers/resume.controller';
import { ResumeService } from './services/resume.service';

@Module({
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
