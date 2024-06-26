import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { ReservationsModule } from "src/app/reservations/reservations.module";
import { ClassesModule } from "src/app/classes/classes.module";
import { NotificationsModule } from "src/app/notifications/notifications.module";

@Module({
  imports: [
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
