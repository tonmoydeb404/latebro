import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateResumeExperienceDto {
  @ApiProperty({
    description: 'Name of the company',
    example: 'Tech Solutions Inc.',
  })
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @ApiPropertyOptional({
    description: 'Description of the role or company',
    example: 'Worked on developing scalable web applications.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Position held at the company',
    example: 'Software Engineer',
  })
  @IsOptional()
  @IsString()
  position?: string;

  @ApiPropertyOptional({
    description: 'Start date of the role in YYYY-MM-DD format',
    example: '2023-01-15',
  })
  @IsOptional()
  @IsString()
  startedAt?: string;

  @ApiPropertyOptional({
    description: 'End date of the role in YYYY-MM-DD format',
    example: '2024-01-15',
  })
  @IsOptional()
  @IsString()
  endedAt?: string;
}
