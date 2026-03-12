import { Module } from '@nestjs/common';
import { PmchformController } from './pmchform.controller';
import { PmchformService } from './pmchform.service';

@Module({
  controllers: [PmchformController],
  providers: [PmchformService]
})
export class PmchformModule {}
