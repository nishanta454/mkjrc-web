import { Controller, Post, Body } from '@nestjs/common';
import { MarriageContact } from '../model/marriage-contact.entity';
import { MarriageContactService } from '../service/marriage-contact.service';

@Controller('marriage-contact')
export class MarriageContactController {
  constructor(private marriageContactsService: MarriageContactService) {}

  @Post()
  async create(@Body() contactData: MarriageContact): Promise<any> {
    return this.marriageContactsService.create(contactData);
  }
}
