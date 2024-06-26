import {
  IsString,
  IsDate,
  IsBoolean,
  IsOptional,
  IsInt,
} from "class-validator";

export class CreateReservationDto {
  @IsString()
  title: string;

  @IsString()
  owner: string;

  @IsDate()
  dateStart: Date;

  @IsDate()
  dateEnd: Date;

  @IsInt()
  classId: number;

  @IsOptional()
  @IsString()
  observation?: string;

  @IsBoolean()
  isCompleted: boolean;

  @IsOptional()
  @IsInt()
  previousId?: number;

  @IsOptional()
  @IsInt()
  nextId?: number;
}
