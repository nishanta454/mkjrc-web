import { Test, TestingModule } from '@nestjs/testing';
import { JyotishContactController } from './jyotish-contact.controller';

describe('JyotishContactController', () => {
  let controller: JyotishContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JyotishContactController],
    }).compile();

    controller = module.get<JyotishContactController>(JyotishContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
