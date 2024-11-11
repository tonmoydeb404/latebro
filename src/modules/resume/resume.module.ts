import { Module } from '@nestjs/common';
import { ResumeProfileController } from './controllers/resume-profile.controller';
import { ResumeController } from './controllers/resume.controller';
import { ResumeProfileService } from './services/resume-profile.service';
import { ResumeService } from './services/resume.service';

@Module({
  controllers: [ResumeController, ResumeProfileController],
  providers: [ResumeService, ResumeProfileService],
})
export class ResumeModule {}
