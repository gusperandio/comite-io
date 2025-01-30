import { FastifyRequest, FastifyReply } from 'fastify';

export async function login(req: FastifyRequest, reply: FastifyReply) {
  const { email, password } = req.body as { email: string; password: string };
  // Authentication logic
  return reply.send({ message: email });
}

export async function register(req: FastifyRequest, reply: FastifyReply) {
  const { email, password } = req.body as { email: string; password: string };
  // Registration logic
  return reply.send({ message: 'User registered successfully!' });
}