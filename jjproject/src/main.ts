/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'; // Import the dotenv module

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4000);
}
bootstrap();
