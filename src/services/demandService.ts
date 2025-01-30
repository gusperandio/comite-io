import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function getAllDemands() {
  return await prisma.demandData.findMany();
}
