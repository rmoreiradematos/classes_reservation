import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateClassDto } from "./dto/create-class.dto";
import { UpdateClassDto } from "./dto/update-class.dto";
import { Class } from "@prisma/client";

@Injectable()
export class ClassesService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateClassDto): Promise<Class> {
    return this.prisma.class.create({ data });
  }

  findAll(): Promise<Class[]> {
    return this.prisma.class.findMany();
  }

  findOne(id: number): Promise<Class | null> {
    return this.prisma.class.findUnique({ where: { id } });
  }

  update(id: number, updateClassDto: UpdateClassDto): Promise<Class> {
    return this.prisma.class.update({
      where: { id },
      data: updateClassDto,
    });
  }

  remove(id: number): Promise<Class> {
    return this.prisma.class.delete({ where: { id } });
  }
}
