import { ParseObjectIdPipe } from '@/common/pipes/object-id.pipe';
import { Body, Controller, Get, Param, Patch, Req } from '@nestjs/common';
import { Request } from 'express';
import { UpdateResumeProfileDto } from '../dto/update-resume-profile.dto';
import { ResumeProfileService } from '../services/resume-profile.service';

@Controller('resumes/:resume_id/profile')
export class ResumeProfileController {
  constructor(private readonly service: ResumeProfileService) {}

  @Get()
  getOne(
    @Req() req: Request,
    @Param(':resume_id', new ParseObjectIdPipe()) resumeId: string,
  ) {
    return this.service.getOne(String(req.user._id), resumeId);
  }

  @Patch()
  update(
    @Req() req: Request,
    @Param(':resume_id', new ParseObjectIdPipe()) resumeId: string,
    @Body() body: UpdateResumeProfileDto,
  ) {
    return this.service.update(String(req.user._id), resumeId, body);
  }
}
