import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  const port = process.env.PORT ?? 5000;
  const serverUrl = process.env.SERVER_URL || `http://localhost:${port}`;

  await app.listen(port, () => {
    logger.log(`Server is running at ${serverUrl}`);
  });
}
bootstrap();
