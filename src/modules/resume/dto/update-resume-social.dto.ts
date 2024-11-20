import { PartialType } from '@nestjs/swagger';
import { CreateResumeSocialDto } from './create-resume-social.dto';

export class UpdateResumeSocialDto extends PartialType(CreateResumeSocialDto) {}
