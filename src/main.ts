import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { createSwaggerConfig } from './common/config/swagger.config';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  app.useGlobalInterceptors(new ResponseInterceptor());

  // Swagger setup
  const config = createSwaggerConfig();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT ?? 5000;
  const serverUrl = process.env.SERVER_URL || `http://localhost:${port}`;

  await app.listen(port, () => {
    logger.log(`Server is running at ${serverUrl}`);
  });
}
bootstrap();
