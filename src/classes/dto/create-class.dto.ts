import { IsString } from "class-validator";

export class CreateClassDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  floor: string;
}
