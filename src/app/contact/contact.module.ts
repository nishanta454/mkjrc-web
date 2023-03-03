import { Module } from '@nestjs/common';
import { ContactController } from './controller/contact.controller';
import { ContactService } from './service/contact.service';
import { Contact } from './model/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
