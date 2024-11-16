import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResumeLanguageDto } from '../dto/create-resume-language.dto';
import { UpdateResumeLanguageDto } from '../dto/update-resume-language.dto';
import { ResumeLanguage } from '../entities/resume-language.entity';
import { Resume } from '../entities/resume.entity';
import { ResumeService } from './resume.service';

@Injectable()
export class ResumeLanguageService {
  constructor(
    @InjectModel(ResumeLanguage.name)
    private readonly model: Model<ResumeLanguage>,
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
      throw new NotFoundException('Resume language document not found');

    return entity.toObject();
  }

  async create(userId: string, resumeId: string, dto: CreateResumeLanguageDto) {
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
    dto: UpdateResumeLanguageDto,
  ) {
    const resume = await this.resumeService
      .getOneWithPermission(userId, resumeId)
      .select('_id')
      .lean();
    if (!resume) throw new NotFoundException('Resume document not found!');

    const entity = await this.model.findOne({ _id: id, resume: resume._id });
    if (!entity)
      throw new NotFoundException('Resume language document not found!');

    const { title, experience } = dto;

    if (title) entity.title = title;
    if (experience) entity.experience = experience;

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
      throw new NotFoundException('Resume language document not found!');

    await entity.deleteOne();

    return entity.toObject();
  }
}
