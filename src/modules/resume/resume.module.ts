import { Module } from '@nestjs/common';
import { ResumeContactController } from './controllers/resume-contact.controller';
import { ResumeProfileController } from './controllers/resume-profile.controller';
import { ResumeController } from './controllers/resume.controller';
import { ResumeContactService } from './services/resume-contact.service';
import { ResumeProfileService } from './services/resume-profile.service';
import { ResumeService } from './services/resume.service';

@Module({
  controllers: [
    ResumeController,
    ResumeProfileController,
    ResumeContactController,
  ],
  providers: [ResumeService, ResumeProfileService, ResumeContactService],
})
export class ResumeModule {}
