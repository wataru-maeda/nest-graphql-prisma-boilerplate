import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimeoutInterceptor } from './app.interceptor';
import config from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TimeoutInterceptor());

  await app.listen(config.port);
  console.log(
    `Application is running on: http://localhost:${config.port}/graphql (env: ${config.env}) 🚀`,
  );
}
bootstrap();
