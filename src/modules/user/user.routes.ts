import { FastifyInstance } from "fastify";
import { UserController } from "./user.controller";
import { authGuard } from "../auth/auth.middleware";

export async function userRoutes(app: FastifyInstance) {
    const controller = new UserController();

    app.get("/me", { preHandler: authGuard }, controller.me);
}
