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
import { CreateResumeExperienceDto } from '../dto/create-resume-experience.dto';
import { UpdateResumeExperienceDto } from '../dto/update-resume-experience.dto';
import { ResumeExperienceService } from '../services/resume-experience.service';

@Controller('resumes/:resume_id/experiences')
export class ResumeExperienceController {
  constructor(private readonly service: ResumeExperienceService) {}

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
    @Body() body: CreateResumeExperienceDto,
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
    @Body() body: UpdateResumeExperienceDto,
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
