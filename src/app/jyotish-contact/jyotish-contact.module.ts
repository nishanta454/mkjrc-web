import { Module } from '@nestjs/common';
import { JyotishContactController } from './controller/jyotish-contact.controller';
import { JyotishContactService } from './service/jyotish-contact.service';
import { JyotishContact } from './model/jyotish-contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([JyotishContact])],
  controllers: [JyotishContactController],
  providers: [JyotishContactService],
})
export class JyotishContactModule {}
