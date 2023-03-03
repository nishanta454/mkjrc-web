import { Test, TestingModule } from '@nestjs/testing';
import { MarriageContactService } from './marriage-contact.service';

describe('MarriageContactService', () => {
  let service: MarriageContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarriageContactService],
    }).compile();

    service = module.get<MarriageContactService>(MarriageContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
