import { ParseObjectIdPipe } from '@/common/pipes/object-id.pipe';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateResumeDto } from '../dto/create-resume.dto';
import { UpdateResumeDto } from '../dto/update-resume.dto';
import { ResumeService } from '../services/resume.service';

@Controller('resumes')
export class ResumeController {
  constructor(private readonly service: ResumeService) {}

  @Get()
  getAll(
    @Req() req: Request,
    @Query('page', new ParseIntPipe({ optional: true })) page: number = 1,
    @Query('limit', new ParseIntPipe({ optional: true })) limit: number = 10,
  ) {
    return this.service.getAll(String(req.user._id), page, limit);
  }

  @Post()
  create(@Req() req: Request, @Body() body: CreateResumeDto) {
    return this.service.create(String(req.user._id), body);
  }

  @Get(':id')
  getOne(
    @Req() req: Request,
    @Param('id', new ParseObjectIdPipe()) id: string,
  ) {
    return this.service.getOne(String(req.user._id), id);
  }

  @Patch(':id')
  update(
    @Req() req: Request,
    @Param('id', new ParseObjectIdPipe()) id: string,
    @Body() body: UpdateResumeDto,
  ) {
    return this.service.update(String(req.user._id), id, body);
  }

  @Delete(':id')
  delete(
    @Req() req: Request,
    @Param('id', new ParseObjectIdPipe()) id: string,
  ) {
    return this.service.delete(String(req.user._id), id);
  }
}
