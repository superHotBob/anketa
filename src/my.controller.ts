import { Controller, Get,Param } from '@nestjs/common';


const express = require('express')
const app = express();
import * as cookieParser from 'cookie-parser';
app.use(cookieParser());
@Controller()
export class MyController {
  
  @Get() 
  // async getBooks() {      
  //   const books = await this.appService.getAccount();   
  //   return `<a href='/book/1'>to book</a>`;    
  // }
  // @Get(':bookID')
  // async getBook(@Param('bookID') bookID: string) {
  //   console.log(bookID);
  //   const book = await this.appService.getAccount();
  //   return book;
  // }
  @Get('book')
    findAll(){  
    console.log('bookID');

    return 'This book';
  }
}