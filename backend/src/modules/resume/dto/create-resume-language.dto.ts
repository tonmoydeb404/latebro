import { ResumeLanguageExperience } from '@/common/enums/resume.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateResumeLanguageDto {
  @ApiProperty({
    description: 'Title of the language (e.g., English, Spanish)',
    example: 'English',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Proficiency level in the language',
    enum: ResumeLanguageExperience,
    example: ResumeLanguageExperience.BASIC,
  })
  @IsNotEmpty()
  @IsEnum(ResumeLanguageExperience)
  experience: ResumeLanguageExperience;
}
