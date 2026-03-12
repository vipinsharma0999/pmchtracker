import { Test, TestingModule } from '@nestjs/testing';
import { PmchformController } from './pmchform.controller';

describe('PmchformController', () => {
  let controller: PmchformController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PmchformController],
    }).compile();

    controller = module.get<PmchformController>(PmchformController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
