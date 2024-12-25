import {
  ResumeContact,
  ResumeContactSchema,
} from '@/modules/resume/entities/resume-contact.entity';
import {
  ResumeEducation,
  ResumeEducationSchema,
} from '@/modules/resume/entities/resume-education.entity';
import {
  ResumeExperience,
  ResumeExperienceSchema,
} from '@/modules/resume/entities/resume-experience.entity';
import {
  ResumeLanguage,
  ResumeLanguageSchema,
} from '@/modules/resume/entities/resume-language.entity';
import {
  ResumeProfile,
  ResumeProfileSchema,
} from '@/modules/resume/entities/resume-profile.entity';
import {
  ResumeProject,
  ResumeProjectSchema,
} from '@/modules/resume/entities/resume-project.entity';
import {
  ResumeSkill,
  ResumeSkillSchema,
} from '@/modules/resume/entities/resume-skill.entity';
import {
  ResumeSocial,
  ResumeSocialSchema,
} from '@/modules/resume/entities/resume-social.entity';
import { Resume, ResumeSchema } from '@/modules/resume/entities/resume.entity';
import { User, UserSchema } from '@/modules/user/entities/user.entity';
import { Global, Logger, Module, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        user: configService.get<string>('MONGO_USER'),
        pass: configService.get<string>('MONGO_PASS'),
        dbName: configService.get<string>('MONGO_DBNAME'),
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Resume.name, schema: ResumeSchema }]),
    MongooseModule.forFeature([
      { name: ResumeProfile.name, schema: ResumeProfileSchema },
    ]),
    MongooseModule.forFeature([
      { name: ResumeContact.name, schema: ResumeContactSchema },
    ]),
    MongooseModule.forFeature([
      { name: ResumeEducation.name, schema: ResumeEducationSchema },
    ]),
    MongooseModule.forFeature([
      { name: ResumeExperience.name, schema: ResumeExperienceSchema },
    ]),
    MongooseModule.forFeature([
      { name: ResumeSkill.name, schema: ResumeSkillSchema },
    ]),
    MongooseModule.forFeature([
      { name: ResumeLanguage.name, schema: ResumeLanguageSchema },
    ]),
    MongooseModule.forFeature([
      { name: ResumeProject.name, schema: ResumeProjectSchema },
    ]),
    MongooseModule.forFeature([
      { name: ResumeSocial.name, schema: ResumeSocialSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule implements OnModuleInit {
  private readonly logger = new Logger(DatabaseModule.name);

  async onModuleInit() {
    this.logger.log('Attempting to connect to Database...');

    try {
      const mongoose = await import('mongoose');
      mongoose.connection.once('open', () => {
        this.logger.log('Database connection established successfully.');
      });
      mongoose.connection.on('error', (err) => {
        this.logger.error('Database connection error: ' + err);
      });
    } catch (err) {
      this.logger.error('Error while setting up Database connection: ' + err);
    }
  }
}
