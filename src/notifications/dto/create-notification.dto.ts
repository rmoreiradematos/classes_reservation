import { IsBoolean, IsObject } from "class-validator";

export class CreateNotificationDto {
  @IsBoolean()
  unread: boolean;

  @IsObject()
  action: object;
}
