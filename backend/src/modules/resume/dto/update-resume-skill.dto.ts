import { PartialType } from '@nestjs/swagger';
import { CreateResumeSkillDto } from './create-resume-skill.dto';

export class UpdateResumeSkillDto extends PartialType(CreateResumeSkillDto) {}
