import { ResumeSocialType } from '@/common/enums/resume.enum';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateResumeSocialDto {
  @ApiProperty({
    description:
      'Title of the social platform or account (e.g., LinkedIn, GitHub)',
    example: 'LinkedIn',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'URL to the social profile',
    example: 'https://linkedin.com/in/your-profile',
  })
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @ApiProperty({
    description: 'Type of social profile',
    enum: ResumeSocialType,
    example: ResumeSocialType.FACEBOOK,
  })
  @IsNotEmpty()
  @IsEnum(ResumeSocialType)
  type: ResumeSocialType;
}
