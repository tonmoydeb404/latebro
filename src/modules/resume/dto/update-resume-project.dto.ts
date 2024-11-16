import { PartialType } from '@nestjs/swagger';
import { CreateResumeProjectDto } from './create-resume-project.dto';

export class UpdateResumeProjectDto extends PartialType(
  CreateResumeProjectDto,
) {}
