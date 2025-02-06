import { FastifyInstance } from "fastify";
import { selectDemands, insertDemands } from "../controllers/demand.controller";

export default async function demandRoutes(fastify: FastifyInstance) {
  fastify.get("", selectDemands);

  fastify.post("", insertDemands);
}