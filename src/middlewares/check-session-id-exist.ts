import { FastifyRequest, FastifyReply } from 'fastify'

export async function checkSessionIdExist(request: FastifyRequest, reply: FastifyReply) {
  const { sessionId } = request.cookies;

  if (!sessionId) {
    return reply.status(404).send({
      error: "Unauthorized",
    });
  }
}
