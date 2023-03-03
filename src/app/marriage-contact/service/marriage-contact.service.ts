import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarriageContact } from '../model/marriage-contact.entity';

@Injectable()
export class MarriageContactService {
  constructor(
    @InjectRepository(MarriageContact)
    private marriageContactRepository: Repository<MarriageContact>,
  ) {}

  async create(contact: MarriageContact): Promise<MarriageContact> {
    return await this.marriageContactRepository.save(contact);
  }
}
