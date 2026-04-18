import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CustomerLocalAuthGuard } from './guards/customer-local-auth.guard';
import { EmployeeLocalAuthGuard } from './guards/employee-local-auth.guard';
import { AdminLocalAuthGuard } from './guards/admin-local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(CustomerLocalAuthGuard)
  @Post('customer/login')
  async loginCustomer(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(EmployeeLocalAuthGuard)
  @Post('employee/login')
  async loginEmployee(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AdminLocalAuthGuard)
  @Post('admin/login')
  async loginAdmin(@Request() req) {
    return this.authService.login(req.user);
  }
}
