import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee, EmployeeDocument } from './schemas/employee.schema';
export declare class EmployeeService {
    private employeeModel;
    constructor(employeeModel: Model<EmployeeDocument>);
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(ma_nhan_vien: number): Promise<Employee>;
    update(ma_nhan_vien: number, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>;
    remove(ma_nhan_vien: number): Promise<Employee>;
}
