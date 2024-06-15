import { Module } from "@nestjs/common";
import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [RabbitMQModule, PrismaModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
