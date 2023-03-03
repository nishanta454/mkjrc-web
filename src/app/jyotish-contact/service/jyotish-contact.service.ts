import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JyotishContact } from '../model/jyotish-contact.entity';

@Injectable()
export class JyotishContactService {
  constructor(
    @InjectRepository(JyotishContact)
    private jyotishContactRepository: Repository<JyotishContact>,
  ) {}

  async create(contact: JyotishContact): Promise<JyotishContact> {
    return await this.jyotishContactRepository.save(contact);
  }
}
