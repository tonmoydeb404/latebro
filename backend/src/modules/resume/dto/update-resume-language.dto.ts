import { PartialType } from '@nestjs/swagger';
import { CreateResumeLanguageDto } from './create-resume-language.dto';

export class UpdateResumeLanguageDto extends PartialType(
  CreateResumeLanguageDto,
) {}
