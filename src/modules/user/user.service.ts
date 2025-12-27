import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export class UserService {
  async getById(userId: string) {
    return prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
  }

  async getByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }
}
