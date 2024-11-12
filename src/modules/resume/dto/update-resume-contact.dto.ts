import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
} from 'class-validator';

export class UpdateResumeContactDto {
  @ApiProperty({ description: 'Resume contact phone' })
  @IsPhoneNumber()
  @IsOptional()
  phone?: string;
  @ApiProperty({ description: 'Resume contact email' })
  @IsEmail()
  @IsOptional()
  email?: string;
  @ApiProperty({ description: 'Resume contact website' })
  @IsUrl()
  @IsOptional()
  website?: string;
  @ApiProperty({ description: 'Resume contact address' })
  @IsString()
  @IsOptional()
  address?: string;
  @ApiProperty({ description: 'Resume contact address link' })
  @IsUrl()
  @IsOptional()
  address_link?: string;
}
