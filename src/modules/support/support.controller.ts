import { Controller } from '@nestjs/common';
import { SupportService } from './support.service';

@Controller('supports')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}
}
