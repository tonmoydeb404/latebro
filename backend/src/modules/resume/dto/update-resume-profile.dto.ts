import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateResumeProfileDto {
  @ApiProperty({ description: 'Resume profile name' })
  @IsString()
  @IsOptional()
  name?: string;
  @ApiProperty({ description: 'Resume profile profession' })
  @IsString()
  @IsOptional()
  profession?: string;
  @ApiProperty({ description: 'Resume profile bio' })
  @IsString()
  @IsOptional()
  bio?: string;
  @ApiProperty({ description: 'Resume profile avatar' })
  @IsString()
  @IsOptional()
  avatar?: string;
}
