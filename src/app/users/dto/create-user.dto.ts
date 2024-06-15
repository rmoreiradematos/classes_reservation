import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  status: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  profile: string;
}
