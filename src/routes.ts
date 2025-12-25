import { FastifyInstance } from "fastify";
import { authRoutes } from "./modules/auth/auth.routes";

export async function registerRoutes(app: FastifyInstance) {
  await app.register(authRoutes, { prefix: "/auth" });
}
