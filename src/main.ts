import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useStaticAssets(join(process.cwd(), 'src'));

  const bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({ extended: true }));

  await app.listen(3000);
}
bootstrap();