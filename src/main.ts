import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { queueOptions } from "./app/rmq-client.options";
import { MicroserviceOptions } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.startAllMicroservices();
  await app.listen(3005);
  app.enableCors();
}
bootstrap();
