import { Controller } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admins')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
}
