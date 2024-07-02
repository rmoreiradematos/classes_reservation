import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: "The unique identifier of the class"})
  id: number;

  @Column()
  @ApiProperty({ example: "A001", description: "The name of the class"})
  name: string;

  @Column()
  @ApiProperty({ example: "1", description: "The floor of the class"})
  floor: string;

  @Column()
  @ApiProperty({ example: "This is a description!", description: "The building of the class"})
  description?: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  @ApiProperty({ example: "2021-09-01T00:00:00Z", description: "The date and time when the class was created"})
  createdAt: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  @ApiProperty({ example: "2021-09-01T00:00:00Z", description: "The date and time when the class was updated"})
  updatedAt: Date;
}
