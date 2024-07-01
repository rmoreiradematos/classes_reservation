import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.startAllMicroservices();

  const config = new DocumentBuilder()
    .setTitle('Sistema de Reserva de Salas')
    .setDescription('API para comunicação com o sistema de reserva de salas.')
    .setVersion('1.0')
    .build();

  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
  
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3005);
}
bootstrap();
