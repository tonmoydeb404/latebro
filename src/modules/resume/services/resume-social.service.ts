import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResumeSocialDto } from '../dto/create-resume-social.dto';
import { UpdateResumeSocialDto } from '../dto/update-resume-social.dto';
import { ResumeSocial } from '../entities/resume-social.entity';
import { Resume } from '../entities/resume.entity';
import { ResumeService } from './resume.service';

@Injectable()
export class ResumeSocialService {
  constructor(
    @InjectModel(ResumeSocial.name)
    private readonly model: Model<ResumeSocial>,
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
      throw new NotFoundException('Resume social document not found');

    return entity.toObject();
  }

  async create(userId: string, resumeId: string, dto: CreateResumeSocialDto) {
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
    dto: UpdateResumeSocialDto,
  ) {
    const resume = await this.resumeService
      .getOneWithPermission(userId, resumeId)
      .select('_id')
      .lean();
    if (!resume) throw new NotFoundException('Resume document not found!');

    const entity = await this.model.findOne({ _id: id, resume: resume._id });
    if (!entity)
      throw new NotFoundException('Resume social document not found!');

    const { title, url, type } = dto;

    if (title) entity.title = title;
    if (url) entity.url = url;
    if (type) entity.type = type;

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
      throw new NotFoundException('Resume social document not found!');

    await entity.deleteOne();

    return entity.toObject();
  }
}
