import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class EmployeeLocalStrategy extends PassportStrategy(Strategy, 'employee-local') {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, pass: string): Promise<any> {
    const user = await this.authService.validateEmployee(email, pass);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
