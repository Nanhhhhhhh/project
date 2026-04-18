import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './schemas/admin.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const salt = await bcrypt.genSalt(10);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const hashedPassword = (await bcrypt.hash(createAdminDto.mat_khau, salt)) as string;
    
    const createdAdmin = new this.adminModel({
      ...createAdminDto,
      mat_khau: hashedPassword,
    });
    return createdAdmin.save();
  }

  async findAll(): Promise<Admin[]> {
    return this.adminModel.find().exec();
  }

  async findByEmail(email: string): Promise<AdminDocument | null> {
    return this.adminModel.findOne({ email }).exec();
  }

  async findOne(id: string): Promise<Admin> {
    const admin = await this.adminModel.findById(id).exec();
    if (!admin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }
    return admin;
  }

  async update(id: string, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    if (updateAdminDto.mat_khau) {
      const salt = await bcrypt.genSalt(10);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      updateAdminDto.mat_khau = (await bcrypt.hash(updateAdminDto.mat_khau, salt)) as string;
    }
    
    const updatedAdmin = await this.adminModel
      .findByIdAndUpdate(id, updateAdminDto, { new: true })
      .exec();
    if (!updatedAdmin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }
    return updatedAdmin;
  }

  async remove(id: string): Promise<Admin> {
    const deletedAdmin = await this.adminModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedAdmin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }
    return deletedAdmin;
  }
}
