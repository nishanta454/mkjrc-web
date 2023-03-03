import { Module } from '@nestjs/common';
import { MarriageContactController } from './controller/marriage-contact.controller';
import { MarriageContactService } from './service/marriage-contact.service';
import { MarriageContact } from './model/marriage-contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MarriageContact])],
  controllers: [MarriageContactController],
  providers: [MarriageContactService],
})
export class MarriageContactModule {}
