import { Test, TestingModule } from '@nestjs/testing';
import { PmchformService } from './pmchform.service';

describe('PmchformService', () => {
  let service: PmchformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PmchformService],
    }).compile();

    service = module.get<PmchformService>(PmchformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
