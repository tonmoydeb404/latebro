import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateResumeDto {
  @ApiProperty({ description: 'Resume title' })
  @IsString()
  @IsOptional()
  title?: string;
}
