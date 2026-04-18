import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer, CustomerDocument } from './schemas/customer.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const salt = await bcrypt.genSalt(10);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const hashedPassword = (await bcrypt.hash(createCustomerDto.mat_khau, salt)) as string;
    
    const createdCustomer = new this.customerModel({
      ...createCustomerDto,
      mat_khau: hashedPassword,
    });
    return createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findByEmail(email: string): Promise<CustomerDocument | null> {
    return this.customerModel.findOne({ email }).exec();
  }

  async findOne(id: string): Promise<Customer> {
    const customer = await this.customerModel.findById(id).exec();
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    if (updateCustomerDto.mat_khau) {
      const salt = await bcrypt.genSalt(10);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      updateCustomerDto.mat_khau = (await bcrypt.hash(updateCustomerDto.mat_khau, salt)) as string;
    }
    
    const updatedCustomer = await this.customerModel
      .findByIdAndUpdate(id, updateCustomerDto, { new: true })
      .exec();
    if (!updatedCustomer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return updatedCustomer;
  }

  async remove(id: string): Promise<Customer> {
    const deletedCustomer = await this.customerModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedCustomer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return deletedCustomer;
  }
}
