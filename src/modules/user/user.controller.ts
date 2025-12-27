import { FastifyRequest, FastifyReply } from "fastify";
import { UserService } from "./user.service";

export class UserController {
    private userService = new UserService();

    me = async (request: FastifyRequest, reply: FastifyReply) => {
        if (!request.user) {
            return reply.status(401).send({ message: "Unauthorized" });
        }
        const user = await this.userService.getById(request.user.sub);


        if (!user) {
        return reply.status(401).send({ message: "Unauthorized" });
        }

        reply.send({
        id: user.id,
        role: user.role,
        });
    }
}