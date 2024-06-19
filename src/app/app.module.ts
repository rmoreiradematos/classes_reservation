import { Module } from "@nestjs/common";
import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { ReservationsModule } from "src/reservations/reservations.module";

@Module({
  imports: [RabbitMQModule, PrismaModule, UsersModule, ReservationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
