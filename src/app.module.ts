import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HelloController } from './hello.controller';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MyController } from './my.controller';
import { AccountSchema } from './data/shema';
import { AccountController } from './data/account.controller';
import { AccountService } from './data/account.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src/page'),
      exclude: ['/'],
     }),
     MongooseModule.forRoot('mongodb+srv://alex:alex@cluster0alex.mvffj.gcp.mongodb.net/my?retryWrites=true&w=majority', { useNewUrlParser: true }),
    MongooseModule.forFeature([{ name: 'Accounts', schema: AccountSchema }])
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
