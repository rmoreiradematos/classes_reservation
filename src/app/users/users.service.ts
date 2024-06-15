import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User, Prisma } from "@prisma/client";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: dto,
    });
  }

  async findOne(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
