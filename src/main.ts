/* eslint-disable no-console */
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { AppConfig } from './configs/config.type';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Users example')
    .setDescription('The users API description')
    .setVersion('1.0.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      in: 'header',
    })
    .build();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: false,
      forbidNonWhitelisted: true,
    }),
  );

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      docExpansion: 'list',
      defaultModelsExpandDepth: 1,
      persistAuthorization: true,
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const configService = app.get(ConfigService);
  const appConfig = configService.get<AppConfig>('app');

  await app.listen(appConfig.port, () => {
    console.log(
      `Server is running on http://${appConfig.host}:${appConfig.port}`,
    );

    console.log(
      `Swagger is running on http://${appConfig.host}:${appConfig.port}/docs`,
    );
  });
}
bootstrap();
