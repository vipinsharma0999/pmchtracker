import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';
import type { Response } from 'express';

@Controller('pmchform')
export class PmchformController {
  @Get()
  getForm(@Res() res: Response) {
    res.sendFile(join(process.cwd(), 'src', 'pmchform', 'views', 'pmchform.html'));
  }
}