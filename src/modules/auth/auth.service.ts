import argon2 from "argon2";
import { PrismaClient } from "../../generated/prisma";
import { signAccessToken } from "../../shared/jwt";
import "dotenv/config";

const prisma = new PrismaClient();

export class AuthService {
  async register(email: string, password: string) {
    const hashedPassword = await argon2.hash(password);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return {
      id: user.id,
      email: user.email,
    };
  }

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      throw new Error("Invalid credentials");
    }

    const accessToken = signAccessToken({
      sub: user.id,
      role: user.role,
    });

    return {
      accessToken: "temp-token",
    };
  }
}
