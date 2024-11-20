import { ResumeSkillExperience } from '@/common/enums/resume.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateResumeSkillDto {
  @ApiProperty({
    description: 'Title of the skill (e.g., JavaScript, Python)',
    example: 'JavaScript',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Proficiency level in the skill',
    enum: ResumeSkillExperience,
    example: ResumeSkillExperience.BEGINNER,
  })
  @IsNotEmpty()
  @IsEnum(ResumeSkillExperience)
  experience: ResumeSkillExperience;
}
