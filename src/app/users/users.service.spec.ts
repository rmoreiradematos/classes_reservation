import { PrismaService } from "../prisma/prisma.service";
import { UsersService } from "./users.service";

describe("first test", () => {
  let usersService: UsersService;

  it("should be true", () => {
    const t = new UsersService(new PrismaService());
    t.create({
      email: "email@email.com",
      name: "name",
      status: "comum",
      profile: "profile",
    });
  });
});
