import { FastifyInstance } from 'fastify';
import { login, register } from '../controllers/demand.controller';

export default async function demandRoutes(fastify: FastifyInstance) {

  fastify.post('/login', login);

  fastify.post('/register', register);
}