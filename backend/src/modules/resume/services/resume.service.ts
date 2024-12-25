import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResumeDto } from '../dto/create-resume.dto';
import { UpdateResumeDto } from '../dto/update-resume.dto';
import { ResumeContact } from '../entities/resume-contact.entity';
import { ResumeProfile } from '../entities/resume-profile.entity';
import { Resume } from '../entities/resume.entity';

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel(Resume.name)
    private readonly model: Model<Resume>,
    @InjectModel(ResumeProfile.name)
    private readonly profileModel: Model<ResumeProfile>,
    @InjectModel(ResumeContact.name)
    private readonly contactModel: Model<ResumeContact>,
  ) {}

  getOneWithPermission(userId: string, resumeId: string) {
    return this.model.findOne({
      user: userId,
      _id: resumeId,
    });
  }

  // Controller Specific ----------------------------------------------------------------------
  async getAll(userId: string) {
    const entities = await this.model
      .find({ user: userId })
      .sort({ updatedAt: -1 });

    return entities;
  }

  async getOne(userId: string, id: string) {
    const entity = await this.model
      .findOne({ user: userId, _id: id })
      .populate(['profile', 'contact']);

    if (!entity) throw new NotFoundException('Resume not found');

    await entity.populate([
      'educations',
      'experiences',
      'languages',
      'projects',
      'skills',
      'socials',
    ]);

    return entity.toObject();
  }

  async create(userId: string, dto: CreateResumeDto) {
    const { title } = dto;

    const profile = new this.profileModel();
    await profile.save();

    const contact = new this.contactModel();
    await contact.save();

    const entity = new this.model({
      title,
      user: userId,
      profile: profile._id,
      contact: contact._id,
    });

    await entity.save();

    return entity.toObject();
  }

  async update(userId: string, id: string, dto: UpdateResumeDto) {
    const entity = await this.model.findOne({ user: userId, _id: id });
    if (!entity) throw new NotFoundException('Resume not found');

    const { title } = dto;

    if (title) entity.title = title;

    await entity.save();

    return entity.toObject();
  }

  async delete(userId: string, id: string) {
    const entity = await this.model.findOne({ user: userId, _id: id });
    if (!entity) throw new NotFoundException('Resume not found');

    await entity.deleteOne();

    return entity.toObject();
  }
}
