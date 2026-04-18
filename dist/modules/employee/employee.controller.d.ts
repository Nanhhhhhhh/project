import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<import("./schemas/employee.schema").Employee>;
    findAll(): Promise<import("./schemas/employee.schema").Employee[]>;
    findOne(id: number): Promise<import("./schemas/employee.schema").Employee>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<import("./schemas/employee.schema").Employee>;
    remove(id: number): Promise<import("./schemas/employee.schema").Employee>;
}
