import { FastifyRequest, FastifyReply } from "fastify";
import { verifyAccessToken } from "../../shared/jwt";

export async function authGuard(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({ message: "Missing Authorization header" });
  }

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    return reply.status(401).send({ message: "Invalid authorization format" });
  }

  try {
    const payload = verifyAccessToken(token);
    request.user = payload;
  } catch {
    return reply.status(401).send({ message: "Invalid or expired token" });
  }
}
