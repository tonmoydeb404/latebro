import { Module } from '@nestjs/common';
import { ResumeContactController } from './controllers/resume-contact.controller';
import { ResumeEducationController } from './controllers/resume-education.controller';
import { ResumeExperienceController } from './controllers/resume-experience.controller';
import { ResumeLanguageController } from './controllers/resume-language.controller';
import { ResumeProfileController } from './controllers/resume-profile.controller';
import { ResumeProjectController } from './controllers/resume-project.controller';
import { ResumeSkillController } from './controllers/resume-skill.controller';
import { ResumeSocialController } from './controllers/resume-social.controller';
import { ResumeController } from './controllers/resume.controller';
import { ResumeContactService } from './services/resume-contact.service';
import { ResumeEducationService } from './services/resume-education.service';
import { ResumeExperienceService } from './services/resume-experience.service';
import { ResumeLanguageService } from './services/resume-language.service';
import { ResumeProfileService } from './services/resume-profile.service';
import { ResumeProjectService } from './services/resume-project.service';
import { ResumeSkillService } from './services/resume-skill.service';
import { ResumeSocialService } from './services/resume-social.service';
import { ResumeService } from './services/resume.service';

@Module({
  controllers: [
    ResumeController,
    ResumeProfileController,
    ResumeContactController,
    ResumeEducationController,
    ResumeSkillController,
    ResumeLanguageController,
    ResumeExperienceController,
    ResumeSocialController,
    ResumeProjectController,
  ],
  providers: [
    ResumeService,
    ResumeProfileService,
    ResumeContactService,
    ResumeEducationService,
    ResumeSkillService,
    ResumeLanguageService,
    ResumeExperienceService,
    ResumeSocialService,
    ResumeProjectService,
  ],
  exports: [ResumeService],
})
export class ResumeModule {}
