import { PartialType } from '@nestjs/swagger';
import { CreateResumeExperienceDto } from './create-resume-experience.dto';

export class UpdateResumeExperienceDto extends PartialType(
  CreateResumeExperienceDto,
) {}
