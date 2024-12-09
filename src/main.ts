import { Logger, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { createSwaggerConfig } from './common/config/swagger.config';
import { ResponseExceptionFilter } from './common/filters/response.exception';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  // Cors
  app.enableCors({
    origin: process.env.CORS_ORIGIN.split(','),
    credentials: true,
  });

  // Cookies
  app.use(cookieParser(process.env.COOKIE_SECRET));

  // Api Prefixing
  app.setGlobalPrefix('api');

  // Api Versioning
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });

  // Success Response Structure
  app.useGlobalInterceptors(new ResponseInterceptor());

  // Error Response Structure
  app.useGlobalFilters(new ResponseExceptionFilter());

  // Swagger setup
  const config = createSwaggerConfig();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT ?? 5000;
  const serverUrl = process.env.SERVER_URL || `http://localhost:${port}`;

  await app.listen(port, '0.0.0.0', () => {
    logger.log(`Server is running at ${serverUrl}`);
  });
}
bootstrap();
