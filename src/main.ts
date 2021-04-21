import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
const app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3004,() => console.log('Application is listening on port 3004'));
}
bootstrap();