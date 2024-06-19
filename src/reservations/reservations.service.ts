import { Injectable } from "@nestjs/common";
import { PrismaService } from "../app/prisma/prisma.service";
import { CreateReservationDto } from "./dto/create-reservation.dto";
import { UpdateReservationDto } from "./dto/update-reservation.dto";
import { Reservation } from "@prisma/client";

@Injectable()
export class ReservationsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateReservationDto): Promise<Reservation> {
    return this.prisma.reservation.create({
      data,
    });
  }

  async findAll(): Promise<Reservation[]> {
    return this.prisma.reservation.findMany({
      include: {
        class: true,
      },
    });
  }

  async findOne(id: number): Promise<Reservation> {
    return this.prisma.reservation.findUnique({
      where: { id },
      include: {
        class: true,
      },
    });
  }

  async update(id: number, data: UpdateReservationDto): Promise<Reservation> {
    return this.prisma.reservation.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<Reservation> {
    return this.prisma.reservation.delete({
      where: { id },
    });
  }
}
