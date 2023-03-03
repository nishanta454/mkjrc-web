import { Controller, Post, Body } from '@nestjs/common';
import { JyotishContact } from '../model/jyotish-contact.entity';
import { JyotishContactService } from '../service/jyotish-contact.service';

@Controller('jyotish-contact')
export class JyotishContactController {
  constructor(private jyotishContactsService: JyotishContactService) {}

  @Post()
  async create(@Body() contactData: JyotishContact): Promise<any> {
    return this.jyotishContactsService.create(contactData);
  }
}
