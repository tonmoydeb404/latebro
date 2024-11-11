import { ApiPagination } from '@/common/interfaces/response.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResumeDto } from '../dto/create-resume.dto';
import { UpdateResumeDto } from '../dto/update-resume.dto';
import { ResumeProfile } from '../entities/resume-profile.entity';
import { Resume } from '../entities/resume.entity';

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel(Resume.name)
    private readonly model: Model<Resume>,
    @InjectModel(ResumeProfile.name)
    private readonly profileModel: Model<ResumeProfile>,
  ) {}

  // Controller Specific ----------------------------------------------------------------------
  async getAll(userId: string, page: number = 1, limit: number = 10) {
    const currentPage = page - 1 || 0;
    const skip = currentPage * limit;

    const total = await this.model.countDocuments({ user: userId });
    const entities = await this.model
      .find({ user: userId })
      .skip(skip)
      .limit(limit)
      .sort({ updatedAt: -1 });

    const totalPages = Math.ceil(total / limit);

    const pagination: ApiPagination = {
      current: page,
      limit,
      pages: totalPages,
      total,
    };

    return { results: entities, pagination };
  }

  async getOne(userId: string, id: string) {
    const entity = await this.model.findOne({ user: userId, _id: id });

    if (!entity) throw new NotFoundException('Resume not found');

    return entity.toObject();
  }

  async create(userId: string, dto: CreateResumeDto) {
    const { title } = dto;

    const profile = new this.profileModel();
    await profile.save();

    const entity = new this.model({
      title,
      user: userId,
      profile: profile._id,
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
