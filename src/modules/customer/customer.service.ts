import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<CustomerDocument>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async findOne(ma_khach_hang: number): Promise<Customer> {
    const customer = await this.customerModel.findOne({ ma_khach_hang }).exec();
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${ma_khach_hang} not found`);
    }
    return customer;
  }

  async update(ma_khach_hang: number, updateCustomerDto: UpdateCustomerDto): Promise<Customer> {
    const updatedCustomer = await this.customerModel
      .findOneAndUpdate({ ma_khach_hang }, updateCustomerDto, { new: true })
      .exec();
    if (!updatedCustomer) {
      throw new NotFoundException(`Customer with ID ${ma_khach_hang} not found`);
    }
    return updatedCustomer;
  }

  async remove(ma_khach_hang: number): Promise<Customer> {
    const deletedCustomer = await this.customerModel
      .findOneAndDelete({ ma_khach_hang })
      .exec();
    if (!deletedCustomer) {
      throw new NotFoundException(`Customer with ID ${ma_khach_hang} not found`);
    }
    return deletedCustomer;
  }
}
