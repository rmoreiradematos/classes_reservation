import { Module } from "@nestjs/common";
import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { ReservationsModule } from "src/reservations/reservations.module";
import { ClassesModule } from "src/classes/classes.module";

@Module({
  imports: [
    RabbitMQModule,
    PrismaModule,
    UsersModule,
    ReservationsModule,
    ClassesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
