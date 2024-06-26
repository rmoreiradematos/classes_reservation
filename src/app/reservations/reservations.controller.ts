import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ReservationsService } from "./reservations.service";
import { CreateReservationDto } from "./dto/create-reservation.dto";
import { UpdateReservationDto } from "./dto/update-reservation.dto";

@Controller("reservations")
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  filterDuplicateReservations(reservations) {
    const seenDates = new Set<string>();
    const filteredReservations = [];
    reservations.forEach((reservation) => {
      console.log(
        reservation.dateStart,
        seenDates.has(reservation.dateStart.toString()),
        seenDates
      );
      if (!seenDates.has(reservation.dateStart.toString())) {
        seenDates.add(reservation.dateStart.toString());
        filteredReservations.push(reservation);
      }
    });

    return filteredReservations;
  }

  @Get()
  async findAll() {
    const reservations = await this.reservationsService.findAll();
    const filteredReservations = this.filterDuplicateReservations(reservations);
    return filteredReservations;
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.reservationsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateReservationDto: UpdateReservationDto
  ) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.reservationsService.remove(+id);
  }
}
