import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { connectionSource } from 'ormconfig';

const mysql = require('mysql2')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await connectionSource.initialize();
  mysql.createConnection(process.env.DATABASE_URL)
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true
  }))
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
