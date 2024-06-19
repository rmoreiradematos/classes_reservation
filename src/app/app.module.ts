import { Module } from "@nestjs/common";
import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { ReservationsModule } from "src/reservations/reservations.module";
import { ClassesModule } from "src/classes/classes.module";
import { NotificationsModule } from "src/notifications/notifications.module";

@Module({
  imports: [
    RabbitMQModule,
    PrismaModule,
    UsersModule,
    ReservationsModule,
    ClassesModule,
    NotificationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
