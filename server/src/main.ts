import { ValidationPipe, Logger } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("poc-nestjs-mongoose")
    .setDescription("proof of concept")
    .setVersion("v1")
    .addTag("api")
    // .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'authorization')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const swaggerPrefix = 'swagger';
  SwaggerModule.setup(swaggerPrefix, app, document);

  writeFileSync('./swagger-spec.json', JSON.stringify(document));

  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: true,
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors();

  const port = process.env.PORT || 3000;

  await app.listen(port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${port}`
  );
  Logger.log(
    `🚀 Swagger is running on: http://localhost:${port}/${swaggerPrefix}`
  );
}
bootstrap();
