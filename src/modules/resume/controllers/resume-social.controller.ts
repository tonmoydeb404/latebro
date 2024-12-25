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
import { CreateResumeSocialDto } from '../dto/create-resume-social.dto';
import { UpdateResumeSocialDto } from '../dto/update-resume-social.dto';
import { ResumeSocialService } from '../services/resume-social.service';

@Controller('resumes/:resume_id/socials')
export class ResumeSocialController {
  constructor(private readonly service: ResumeSocialService) {}

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
    @Body() body: CreateResumeSocialDto,
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
    @Body() body: UpdateResumeSocialDto,
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
