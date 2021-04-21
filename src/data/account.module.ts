import {  Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountSchema } from './shema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Accounts', schema: AccountSchema }]),
  ],
  controllers: [AccountController],
  
})
export class AccountModule { }