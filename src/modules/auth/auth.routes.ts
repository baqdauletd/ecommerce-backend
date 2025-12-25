import { FastifyInstance } from "fastify";
import { AuthController } from "./auth.controller";

export async function authRoutes(app: FastifyInstance) {
    const controller = new AuthController();

    app.post("/login", controller.login);
    app.post("/register", controller.register);
}