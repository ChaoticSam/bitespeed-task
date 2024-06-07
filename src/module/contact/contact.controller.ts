// src/contact/contact.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('identify')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async identify(@Body() body: { email?: string; phoneNumber?: string }) {
    return this.contactService.identify(body.email, body.phoneNumber);
  }
}