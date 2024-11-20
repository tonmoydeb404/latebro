import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResumeEducationDto } from '../dto/create-resume-education.dto';
import { UpdateResumeEducationDto } from '../dto/update-resume-education.dto';
import { ResumeEducation } from '../entities/resume-education.entity';
import { Resume } from '../entities/resume.entity';
import { ResumeService } from './resume.service';

@Injectable()
export class ResumeEducationService {
  constructor(
    @InjectModel(ResumeEducation.name)
    private readonly model: Model<ResumeEducation>,
    private readonly resumeService: ResumeService,
  ) {}

  // Controller Specific ----------------------------------------------------------------------

  async getAll(userId: string, resumeId: string) {
    const resume = await this.resumeService
      .getOneWithPermission(userId, resumeId)
      .select('_id')
      .lean();

    if (!resume) throw new NotFoundException('Resume document not found!');

    const entities = await this.model
      .find({ resume: resume._id })
      .sort({ createdAt: -1 });

    return { results: entities };
  }

  async getOne(userId: string, resumeId: string, id: string) {
    const entity = await this.model.findOne(
      { _id: id, resume: resumeId },
      { populate: 'resume' },
    );

    if (
      !entity ||
      !(entity.resume instanceof Resume) ||
      String(entity.resume.user) !== userId
    )
      throw new NotFoundException('Resume education document not found');

    return entity.toObject();
  }

  async create(
    userId: string,
    resumeId: string,
    dto: CreateResumeEducationDto,
  ) {
    const resume = await this.resumeService
      .getOneWithPermission(userId, resumeId)
      .select('_id')
      .lean();

    if (!resume) throw new NotFoundException('Resume document not found!');

    const entity = new this.model({
      ...dto,
      resume: resume._id,
    });

    await entity.save();

    return entity.toObject();
  }

  async update(
    userId: string,
    resumeId: string,
    id: string,
    dto: UpdateResumeEducationDto,
  ) {
    const resume = await this.resumeService
      .getOneWithPermission(userId, resumeId)
      .select('_id')
      .lean();
    if (!resume) throw new NotFoundException('Resume document not found!');

    const entity = await this.model.findOne({ _id: id, resume: resume._id });
    if (!entity)
      throw new NotFoundException('Resume education document not found!');

    const { description, endedAt, instituteName, startedAt, subject } = dto;

    if (description) entity.description = description;
    if (endedAt) entity.endedAt = endedAt;
    if (instituteName) entity.instituteName = instituteName;
    if (startedAt) entity.startedAt = startedAt;
    if (subject) entity.subject = subject;

    await entity.save();

    return entity.toObject();
  }

  async delete(userId: string, resumeId: string, id: string) {
    const resume = await this.resumeService
      .getOneWithPermission(userId, resumeId)
      .select('_id')
      .lean();
    if (!resume) throw new NotFoundException('Resume document not found!');

    const entity = await this.model.findOne({ _id: id, resume: resume._id });
    if (!entity)
      throw new NotFoundException('Resume education document not found!');

    await entity.deleteOne();

    return entity.toObject();
  }
}
