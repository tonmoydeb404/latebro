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
import { CreateResumeEducationDto } from '../dto/create-resume-education.dto';
import { UpdateResumeEducationDto } from '../dto/update-resume-education.dto';
import { ResumeEducationService } from '../services/resume-education.service';

@Controller('resumes/:resume_id/educations')
export class ResumeEducationController {
  constructor(private readonly service: ResumeEducationService) {}

  @Get()
  getAll(
    @Req() req: Request,
    @Param(':resume_id', new ParseObjectIdPipe()) resumeId: string,
  ) {
    return this.service.getAll(String(req.user._id), resumeId);
  }

  @Post()
  create(
    @Req() req: Request,
    @Param(':resume_id', new ParseObjectIdPipe()) resumeId: string,
    @Body() body: CreateResumeEducationDto,
  ) {
    return this.service.create(String(req.user._id), resumeId, body);
  }

  @Get(':id')
  getOne(
    @Req() req: Request,
    @Param(':resume_id', new ParseObjectIdPipe()) resumeId: string,
    @Param(':id', new ParseObjectIdPipe()) id: string,
  ) {
    return this.service.getOne(String(req.user._id), resumeId, id);
  }

  @Patch(':id')
  update(
    @Req() req: Request,
    @Param(':resume_id', new ParseObjectIdPipe()) resumeId: string,
    @Param(':id', new ParseObjectIdPipe()) id: string,
    @Body() body: UpdateResumeEducationDto,
  ) {
    return this.service.update(String(req.user._id), resumeId, id, body);
  }

  @Delete(':id')
  delete(
    @Req() req: Request,
    @Param(':resume_id', new ParseObjectIdPipe()) resumeId: string,
    @Param(':id', new ParseObjectIdPipe()) id: string,
  ) {
    return this.service.delete(String(req.user._id), resumeId, id);
  }
}
