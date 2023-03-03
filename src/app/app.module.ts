import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { JyotishContactModule } from './jyotish-contact/jyotish-contact.module';
import { MarriageContactModule } from './marriage-contact/marriage-contact.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ContactModule,
    JyotishContactModule,
    MarriageContactModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/mjrc',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
