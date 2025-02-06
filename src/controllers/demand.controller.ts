import { PrismaClient } from "@prisma/client";
import { FastifyRequest, FastifyReply } from "fastify";
import { DemandDataType } from "../types/DemandData";
import { ControlDataType } from "../types/ControlData";
import { createControl } from "../services/demandService";
const prisma = new PrismaClient();
export async function selectDemands(req: FastifyRequest, reply: FastifyReply) {
  const feedbackList = await prisma.demandData.findFirst();

  if (!feedbackList) {
    return reply
      .status(400)
      .send({ error: "Bad Request", message: "Invalid input" });
  }

  return reply.send({ feedbackList });
}

export async function insertDemands(req: FastifyRequest, reply: FastifyReply) { 
  const insert = await createControl((await req.body) as ControlDataType)
 
  if(!insert)
    return reply
      .status(400)
      .send({ error: "Bad Request", message: "Error to create your Control" });

  return reply.status(200).send({ message: "Control registered successfully!" });
}
