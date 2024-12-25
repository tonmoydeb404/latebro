import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateResumeDto {
  @ApiProperty({ description: 'Resume title' })
  @IsString()
  @IsNotEmpty()
  title: string;
}
