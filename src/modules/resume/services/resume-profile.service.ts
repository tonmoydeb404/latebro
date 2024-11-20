import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateResumeProfileDto } from '../dto/update-resume-profile.dto';
import { ResumeProfile } from '../entities/resume-profile.entity';
import { Resume } from '../entities/resume.entity';

@Injectable()
export class ResumeProfileService {
  constructor(
    @InjectModel(ResumeProfile.name)
    private readonly model: Model<ResumeProfile>,
    @InjectModel(Resume.name)
    private readonly resumeModel: Model<Resume>,
  ) {}

  async getOneByResume(userId: string, resumeId: string) {
    const resume = await this.resumeModel
      .findOne({
        user: userId,
        _id: resumeId,
      })
      .select('profile');
    if (!resume) return null;

    const entity = await this.model.findById(resume.profile);
    if (!entity) return null;

    return entity;
  }

  // Controller Specific ----------------------------------------------------------------------

  async getOne(userId: string, resumeId: string) {
    const entity = await this.getOneByResume(userId, resumeId);
    if (!entity) throw new NotFoundException('Resume profile not found');

    return entity.toObject();
  }

  async update(userId: string, resumeId: string, dto: UpdateResumeProfileDto) {
    const entity = await this.getOneByResume(userId, resumeId);
    if (!entity) throw new NotFoundException('Resume profile not found');

    const { avatar, bio, name, profession } = dto;

    if (avatar !== undefined) entity.avatar = avatar;
    if (bio !== undefined) entity.bio = bio;
    if (name !== undefined) entity.name = name;
    if (profession !== undefined) entity.profession = profession;

    await entity.save();

    return entity.toObject();
  }
}
