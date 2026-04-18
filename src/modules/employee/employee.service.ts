import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee, EmployeeDocument } from './schemas/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const createdEmployee = new this.employeeModel(createEmployeeDto);
    return createdEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeModel.find().exec();
  }

  async findOne(ma_nhan_vien: number): Promise<Employee> {
    const employee = await this.employeeModel.findOne({ ma_nhan_vien }).exec();
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${ma_nhan_vien} not found`);
    }
    return employee;
  }

  async update(ma_nhan_vien: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const updatedEmployee = await this.employeeModel
      .findOneAndUpdate({ ma_nhan_vien }, updateEmployeeDto, { new: true })
      .exec();
    if (!updatedEmployee) {
      throw new NotFoundException(`Employee with ID ${ma_nhan_vien} not found`);
    }
    return updatedEmployee;
  }

  async remove(ma_nhan_vien: number): Promise<Employee> {
    const deletedEmployee = await this.employeeModel
      .findOneAndDelete({ ma_nhan_vien })
      .exec();
    if (!deletedEmployee) {
      throw new NotFoundException(`Employee with ID ${ma_nhan_vien} not found`);
    }
    return deletedEmployee;
  }
}
