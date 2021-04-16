import { Controller, Get, Req,HttpCode } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('hello')
  @HttpCode(200)
  findALL(): string {
    return 'Hello Bob';
  }
  // @Get()
  // @HttpCode(200)
  // create(@Req() request: Request): string {    
  //   return `By Bob <a href='/hello'>Back</a>`;
      
  // }
  
}