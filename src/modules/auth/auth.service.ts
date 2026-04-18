import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from '../customer/customer.service';
import { EmployeeService } from '../employee/employee.service';
import { AdminService } from '../admin/admin.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private employeeService: EmployeeService,
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  async validateCustomer(email: string, pass: string): Promise<any> {
    const user = await this.customerService.findByEmail(email);
    if (user && await bcrypt.compare(pass, user.mat_khau)) {
      const { mat_khau, ...result } = user.toObject();
      return { ...result, role: 'customer' };
    }
    return null;
  }

  async validateEmployee(email: string, pass: string): Promise<any> {
    const user = await this.employeeService.findByEmail(email);
    if (user && await bcrypt.compare(pass, user.mat_khau)) {
      const { mat_khau, ...result } = user.toObject();
      return { ...result, role: 'employee' };
    }
    return null;
  }

  async validateAdmin(email: string, pass: string): Promise<any> {
    const user = await this.adminService.findByEmail(email);
    if (user && await bcrypt.compare(pass, user.mat_khau)) {
      const { mat_khau, ...result } = user.toObject();
      return { ...result, role: 'admin' };
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
      user: user
    };
  }
}
