import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResumeProjectDto } from '../dto/create-resume-project.dto';
import { UpdateResumeProjectDto } from '../dto/update-resume-project.dto';
import { ResumeProject } from '../entities/resume-project.entity';
import { Resume } from '../entities/resume.entity';
import { ResumeService } from './resume.service';

@Injectable()
export class ResumeProjectService {
  constructor(
    @InjectModel(ResumeProject.name)
    private readonly model: Model<ResumeProject>,
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

    return { items: entities };
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
      throw new NotFoundException('Resume project document not found');

    return entity.toObject();
  }

  async create(userId: string, resumeId: string, dto: CreateResumeProjectDto) {
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
    dto: UpdateResumeProjectDto,
  ) {
    const resume = await this.resumeService
      .getOneWithPermission(userId, resumeId)
      .select('_id')
      .lean();
    if (!resume) throw new NotFoundException('Resume document not found!');

    const entity = await this.model.findOne({ _id: id, resume: resume._id });
    if (!entity)
      throw new NotFoundException('Resume project document not found!');

    const { name, description, previewUrl, sourceUrl, caseStudyUrl, tools } =
      dto;

    if (name) entity.name = name;
    if (description) entity.description = description;
    if (previewUrl) entity.previewUrl = previewUrl;
    if (sourceUrl) entity.sourceUrl = sourceUrl;
    if (caseStudyUrl) entity.caseStudyUrl = caseStudyUrl;
    if (tools) entity.tools = tools;

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
      throw new NotFoundException('Resume project document not found!');

    await entity.deleteOne();

    return entity.toObject();
  }
}
