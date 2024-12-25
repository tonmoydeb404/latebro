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
import { CreateResumeProjectDto } from '../dto/create-resume-project.dto';
import { UpdateResumeProjectDto } from '../dto/update-resume-project.dto';
import { ResumeProjectService } from '../services/resume-project.service';

@Controller('resumes/:resume_id/projects')
export class ResumeProjectController {
  constructor(private readonly service: ResumeProjectService) {}

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
    @Body() body: CreateResumeProjectDto,
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
    @Body() body: UpdateResumeProjectDto,
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
