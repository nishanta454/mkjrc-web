import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private contactsService: ContactService) {}

  @Post()
  async create(@Body() contactData: Contact): Promise<any> {
    return this.contactsService.create(contactData);
  }
}
