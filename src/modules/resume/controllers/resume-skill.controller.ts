import { ParseObjectIdPipe } from '@/common/pipes/object-id.pipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateResumeSkillDto } from '../dto/create-resume-skill.dto';
import { UpdateResumeSkillDto } from '../dto/update-resume-skill.dto';
import { ResumeSkillService } from '../services/resume-skill.service';

@Controller('resumes/:resume_id/skills')
export class ResumeSkillController {
  constructor(private readonly service: ResumeSkillService) {}

  @Get()
  getAll(
    @Req() req: Request,
    @Param('resume_id', new ParseObjectIdPipe()) resumeId: string,
  ) {
    return this.service.getAll(String(req.user._id), resumeId);
  }

  @Post()
  create(
    @Req() req: Request,
    @Param('resume_id', new ParseObjectIdPipe()) resumeId: string,
    @Body() body: CreateResumeSkillDto,
  ) {
    return this.service.create(String(req.user._id), resumeId, body);
  }

  @Get(':id')
  getOne(
    @Req() req: Request,
    @Param('resume_id', new ParseObjectIdPipe()) resumeId: string,
    @Param('id', new ParseObjectIdPipe()) id: string,
  ) {
    return this.service.getOne(String(req.user._id), resumeId, id);
  }

  @Patch(':id')
  update(
    @Req() req: Request,
    @Param('resume_id', new ParseObjectIdPipe()) resumeId: string,
    @Param('id', new ParseObjectIdPipe()) id: string,
    @Body() body: UpdateResumeSkillDto,
  ) {
    return this.service.update(String(req.user._id), resumeId, id, body);
  }

  @Delete(':id')
  delete(
    @Req() req: Request,
    @Param('resume_id', new ParseObjectIdPipe()) resumeId: string,
    @Param('id', new ParseObjectIdPipe()) id: string,
  ) {
    return this.service.delete(String(req.user._id), resumeId, id);
  }
}
