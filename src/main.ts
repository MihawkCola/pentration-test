import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.Port || 3000);
  Logger.log(`Run on ${(await app.getUrl()).toString()}`);
}
bootstrap();
