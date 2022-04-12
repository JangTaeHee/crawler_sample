import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { init } from './bootstrap';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await init();

  await app.listen(4200);
}
bootstrap();
