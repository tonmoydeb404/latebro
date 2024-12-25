import { ParseObjectIdPipe } from '@/common/pipes/object-id.pipe';
import { Body, Controller, Get, Param, Patch, Req } from '@nestjs/common';
import { Request } from 'express';
import { UpdateResumeContactDto } from '../dto/update-resume-contact.dto';
import { ResumeContactService } from '../services/resume-contact.service';

@Controller('resumes/:resume_id/contact')
export class ResumeContactController {
  constructor(private readonly service: ResumeContactService) {}

  @Get()
  getOne(
    @Req() req: Request,
    @Param('resume_id', new ParseObjectIdPipe()) resumeId: string,
  ) {
    return this.service.getOne(String(req.user._id), resumeId);
  }

  @Patch()
  update(
    @Req() req: Request,
    @Param('resume_id', new ParseObjectIdPipe()) resumeId: string,
    @Body() body: UpdateResumeContactDto,
  ) {
    return this.service.update(String(req.user._id), resumeId, body);
  }
}
