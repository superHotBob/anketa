import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller()
export class HelloController { 
  @Get('hello')
  @HttpCode(200) 
  findALL() {
    return `<h1 align="center">Hello Bob</h1>`;
  }  
}