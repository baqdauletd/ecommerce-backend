import { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "./auth.service";

export class AuthController {
    private authService = new AuthService();

    login = async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as { email: string; password: string };

        const token = await this.authService.login(body.email, body.password);
        reply.send(token);
    }

    register = async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body as { email: string; password: string; name: string };

        const user = await this.authService.register(body.email, body.password);
        reply.code(201).send(user);
    }

}