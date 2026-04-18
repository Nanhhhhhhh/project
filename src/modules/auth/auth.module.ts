import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { CustomerModule } from '../customer/customer.module';
import { EmployeeModule } from '../employee/employee.module';
import { AdminModule } from '../admin/admin.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { CustomerLocalStrategy } from './strategies/customer-local.strategy';
import { EmployeeLocalStrategy } from './strategies/employee-local.strategy';
import { AdminLocalStrategy } from './strategies/admin-local.strategy';

export const jwtSecret = 'SUPER_SECRET_KEY_CHANGE_ME_IN_PRODUCTION';

@Module({
  imports: [
    CustomerModule,
    EmployeeModule,
    AdminModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [
    AuthService, 
    JwtStrategy, 
    CustomerLocalStrategy, 
    EmployeeLocalStrategy, 
    AdminLocalStrategy
  ],
  controllers: [AuthController],
})
export class AuthModule {}
