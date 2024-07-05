/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv'; // Import the dotenv module
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import swaggerUi from 'swagger-ui-express';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();



  const options = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, options); // Create the Swagger document
  SwaggerModule.setup('api', app, document); // Set up the Swagger module

  await app.listen(4000);
}
bootstrap();
