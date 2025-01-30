import { FastifyRequest, FastifyReply } from 'fastify';

export async function selectDemands(req: FastifyRequest, reply: FastifyReply) {
  const { email, password } = req.body as { email: string; password: string };
  return reply.send({ message: email });
}

export async function insertDemands(req: FastifyRequest, reply: FastifyReply) {
  const { email, password } = req.body as { email: string; password: string };
  return reply.send({ message: 'User registered successfully!' });
}