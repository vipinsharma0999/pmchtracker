import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import type { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  @Get()
  getLogin(@Res() res: Response) {
    res.sendFile(join(process.cwd(), 'src', 'view', 'login.html'));
  }
  @Post('login')
  handleLogin(@Body() body: any, @Res() res: Response) {
    const { username, password } = body;
    if (username === 'pmch' && password === 'admin123') {
      res.redirect('/pmchform');
    } else {
      res.redirect('/?error=1');
    }
  }
}
