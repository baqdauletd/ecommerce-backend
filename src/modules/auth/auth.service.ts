import argon2 from "argon2";

export class AuthService {
  async register(email: string, password: string) {
    const hashedPassword = await argon2.hash(password);

    // add DB later
    return {
      id: "temp-id",
      email,
    };
  }

  async login(email: string, password: string) {

    // add DB later
    return {
      accessToken: "temp-token",
    };
  }
}
