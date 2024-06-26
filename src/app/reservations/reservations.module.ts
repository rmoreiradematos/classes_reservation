import { Module } from "@nestjs/common";
import { ReservationsService } from "./reservations.service";
import { ReservationsController } from "./reservations.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { RECURRENCY_QUEUE } from "src/commom/queue-tokens/queue-tokens.providers";

@Module({
  imports: [PrismaModule],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
