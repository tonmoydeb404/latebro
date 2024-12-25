import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateResumeContactDto } from '../dto/update-resume-contact.dto';
import { ResumeContact } from '../entities/resume-contact.entity';
import { Resume } from '../entities/resume.entity';

@Injectable()
export class ResumeContactService {
  constructor(
    @InjectModel(ResumeContact.name)
    private readonly model: Model<ResumeContact>,
    @InjectModel(Resume.name)
    private readonly resumeModel: Model<Resume>,
  ) {}

  async getOneByResume(userId: string, resumeId: string) {
    const resume = await this.resumeModel
      .findOne({
        user: userId,
        _id: resumeId,
      })
      .select('contact');
    if (!resume) return null;

    const entity = await this.model.findById(resume.contact);
    if (!entity) return null;

    return entity;
  }

  // Controller Specific ----------------------------------------------------------------------

  async getOne(userId: string, resumeId: string) {
    const entity = await this.getOneByResume(userId, resumeId);
    if (!entity) throw new NotFoundException('Resume contact not found');

    return entity.toObject();
  }

  async update(userId: string, resumeId: string, dto: UpdateResumeContactDto) {
    const entity = await this.getOneByResume(userId, resumeId);
    if (!entity) throw new NotFoundException('Resume contact not found');

    const { address, address_link, email, phone, website } = dto;

    if (address !== undefined) entity.address = address;
    if (address_link !== undefined) entity.address_link = address_link;
    if (email !== undefined) entity.email = email;
    if (phone !== undefined) entity.phone = phone;
    if (website !== undefined) entity.website = website;

    await entity.save();

    return entity.toObject();
  }
}
