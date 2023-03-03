import { Test, TestingModule } from '@nestjs/testing';
import { MarriageContactController } from './marriage-contact.controller';

describe('MarriageContactController', () => {
  let controller: MarriageContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarriageContactController],
    }).compile();

    controller = module.get<MarriageContactController>(
      MarriageContactController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
