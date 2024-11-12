import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateResumeEducationDto } from './create-resume-education.dto';

export class UpdateResumeEducationDto extends PartialType(
  CreateResumeEducationDto,
) {
  @ApiPropertyOptional({
    description: 'Name of the educational institute',
    example: 'University of Example',
  })
  instituteName?: string;

  @ApiPropertyOptional({
    description: 'Description of the education',
    example: 'Studied computer science',
  })
  description?: string;

  @ApiPropertyOptional({
    description: 'Subject of study',
    example: 'Computer Science',
  })
  subject?: string;

  @ApiPropertyOptional({
    description: 'Start date of the education in ISO format',
    example: '2022-01-01',
  })
  startedAt?: string;

  @ApiPropertyOptional({
    description: 'End date of the education in ISO format',
    example: '2023-01-01',
  })
  endedAt?: string;
}
