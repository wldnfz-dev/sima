import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { connectionSource } from 'src/ormconfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await connectionSource.initialize();
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true
  }))
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
