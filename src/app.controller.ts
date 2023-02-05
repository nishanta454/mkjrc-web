import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ContactRequest, ContactResponse } from './models';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getIndex() {
    return {};
  }

  @Post('/contact')
  doContact(@Body() request: ContactRequest): ContactResponse {
    console.log(request);
    return new ContactResponse(1, 'sas');
  }
}
