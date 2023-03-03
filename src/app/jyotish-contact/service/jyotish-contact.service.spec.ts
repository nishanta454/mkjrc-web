import { Test, TestingModule } from '@nestjs/testing';
import { JyotishContactService } from './jyotish-contact.service';

describe('JyotishContactService', () => {
  let service: JyotishContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JyotishContactService],
    }).compile();

    service = module.get<JyotishContactService>(JyotishContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
