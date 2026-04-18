"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const employee_schema_1 = require("./schemas/employee.schema");
let EmployeeService = class EmployeeService {
    employeeModel;
    constructor(employeeModel) {
        this.employeeModel = employeeModel;
    }
    async create(createEmployeeDto) {
        const createdEmployee = new this.employeeModel(createEmployeeDto);
        return createdEmployee.save();
    }
    async findAll() {
        return this.employeeModel.find().exec();
    }
    async findOne(ma_nhan_vien) {
        const employee = await this.employeeModel.findOne({ ma_nhan_vien }).exec();
        if (!employee) {
            throw new common_1.NotFoundException(`Employee with ID ${ma_nhan_vien} not found`);
        }
        return employee;
    }
    async update(ma_nhan_vien, updateEmployeeDto) {
        const updatedEmployee = await this.employeeModel
            .findOneAndUpdate({ ma_nhan_vien }, updateEmployeeDto, { new: true })
            .exec();
        if (!updatedEmployee) {
            throw new common_1.NotFoundException(`Employee with ID ${ma_nhan_vien} not found`);
        }
        return updatedEmployee;
    }
    async remove(ma_nhan_vien) {
        const deletedEmployee = await this.employeeModel
            .findOneAndDelete({ ma_nhan_vien })
            .exec();
        if (!deletedEmployee) {
            throw new common_1.NotFoundException(`Employee with ID ${ma_nhan_vien} not found`);
        }
        return deletedEmployee;
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(employee_schema_1.Employee.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EmployeeService);
//# sourceMappingURL=employee.service.js.map