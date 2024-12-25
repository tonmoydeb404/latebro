import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateResumeEducationDto {
  @ApiProperty({
    description: 'Name of the educational institute',
    example: 'University of Example',
  })
  @IsNotEmpty()
  @IsString()
  instituteName: string;

  @ApiProperty({
    description: 'Description of the education',
    example: 'Studied computer science',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Subject of study',
    example: 'Computer Science',
    required: false,
  })
  @IsOptional()
  @IsString()
  subject?: string;

  @ApiProperty({
    description: 'Start date of the education in ISO format',
    example: '2022-01-01',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  startedAt?: string;

  @ApiProperty({
    description: 'End date of the education in ISO format',
    example: '2023-01-01',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  endedAt?: string;
}
