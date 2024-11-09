import { DocumentBuilder } from '@nestjs/swagger';

export const createSwaggerConfig = () => {
  return new DocumentBuilder()
    .setTitle('LateBro Backend')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addBearerAuth()
    .addCookieAuth('token')
    .addSecurityRequirements('bearer')
    .addSecurityRequirements('cookie')
    .build();
};
