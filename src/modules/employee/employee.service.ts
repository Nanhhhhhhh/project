import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee, EmployeeDocument } from './schemas/employee.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const salt = await bcrypt.genSalt(10);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const hashedPassword = (await bcrypt.hash(createEmployeeDto.mat_khau, salt)) as string;
    
    const createdEmployee = new this.employeeModel({
      ...createEmployeeDto,
      mat_khau: hashedPassword,
    });
    return createdEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async findByEmail(email: string): Promise<EmployeeDocument | null> {
    return this.employeeModel.findOne({ email }).exec();
  }

  async findOne(id: string): Promise<Employee> {
    const employee = await this.employeeModel.findById(id).exec();
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    if (updateEmployeeDto.mat_khau) {
      const salt = await bcrypt.genSalt(10);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      updateEmployeeDto.mat_khau = (await bcrypt.hash(updateEmployeeDto.mat_khau, salt)) as string;
    }
    
    const updatedEmployee = await this.employeeModel
      .findByIdAndUpdate(id, updateEmployeeDto, { new: true })
      .exec();
    if (!updatedEmployee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return updatedEmployee;
  }

  async remove(id: string): Promise<Employee> {
    const deletedEmployee = await this.employeeModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedEmployee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return deletedEmployee;
  }
}
