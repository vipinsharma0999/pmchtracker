import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PmchformModule } from './pmchform/pmchform.module';

@Module({
  imports: [PmchformModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
