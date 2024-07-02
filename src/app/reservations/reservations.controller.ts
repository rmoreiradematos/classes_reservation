import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateReservationDto } from "./dto/create-reservation.dto";
import { UpdateReservationDto } from "./dto/update-reservation.dto";
import { ReservationsService } from "./reservations.service";

@Controller("reservations")
@ApiTags("reservations")
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @ApiOperation({ summary: "Create a new reservation" })
  @ApiResponse({ status: 201, description: "The reservation has been successfully created." })
  @ApiResponse({ status: 400, description: "Bad request." })
  create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationsService.create(createReservationDto);
  }

  filterDuplicateReservations(reservations) {
    const filteredReservations = [];
    reservations.forEach((reservation) => {
      if (reservation.title !== 'Recurring reservation') {
        filteredReservations.push(reservation);
      }
    });

    return filteredReservations;
  }

  @Get()
  @ApiOperation({ summary: "List all reservations" })
  @ApiResponse({ status: 200, description: "List of reservations." })
  @ApiResponse({ status: 404, description: "Reservations not found." })
  async findAll() {
    const reservations = await this.reservationsService.findAll();
    const filteredReservations = this.filterDuplicateReservations(reservations);
    return filteredReservations;
  }

  @Get(":id")
  @ApiOperation({ summary: "Find a reservation by ID" })
  @ApiResponse({ status: 200, description: "Reservation found." })
  @ApiResponse({ status: 404, description: "Reservation not found." })
  findOne(@Param("id") id: string) {
    return this.reservationsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a reservation by ID" })
  @ApiResponse({ status: 200, description: "Reservation updated." })
  @ApiResponse({ status: 404, description: "Reservation not found." })
  update(
    @Param("id") id: string,
    @Body() updateReservationDto: UpdateReservationDto
  ) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Remove a reservation by ID" })
  @ApiResponse({ status: 200, description: "Reservation removed." })
  @ApiResponse({ status: 404, description: "Reservation not found." })
  remove(@Param("id") id: string) {
    return this.reservationsService.remove(+id);
  }
}
