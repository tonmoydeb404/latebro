import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateResumeProjectDto {
  @ApiProperty({
    description: 'Name of the project',
    example: 'Portfolio Website',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'Description of the project',
    example: 'A personal portfolio showcasing my work and skills.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Preview URL of the project',
    example: 'https://example.com/preview',
  })
  @IsOptional()
  @IsUrl()
  previewUrl?: string;

  @ApiPropertyOptional({
    description: 'Source code URL of the project',
    example: 'https://github.com/user/repo',
  })
  @IsOptional()
  @IsUrl()
  sourceUrl?: string;

  @ApiPropertyOptional({
    description: 'Case study URL for the project',
    example: 'https://example.com/case-study',
  })
  @IsOptional()
  @IsUrl()
  caseStudyUrl?: string;

  @ApiProperty({
    description: 'List of tools used in the project',
    example: ['React', 'TypeScript', 'Node.js'],
  })
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  tools: string[];
}
