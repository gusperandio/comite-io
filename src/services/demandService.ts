import { Prisma, PrismaClient } from "@prisma/client";
import { ControlDataType } from "../types/ControlData";

const prisma = new PrismaClient();
export async function getAllDemands() {
  return await prisma.controlData.findMany();
}

export async function createControl(
  content: ControlDataType
): Promise<boolean | unknown> {
  try { 
    await prisma.controlData.create({
      data: {
        initialDate: new Date(
          content.initialDate.split("/").reverse().join("-")
        ),
        finalDate: new Date(content.finalDate.split("/").reverse().join("-")),
        demandData: {
          create: content.demandData.map((demand) => ({
            project: demand.project,
            type: demand.type,
            who: demand.who,
            supp: demand.supp,
            demand: demand.demand,
            analist: demand.analist,
            aprov: demand.aprov,
            dev: demand.dev,
            test: demand.test,
            date: demand.date,
            usersApproved: demand.usersApproved || [],
            usersRefused: demand.usersRefused || [],
            usersIndifferent: demand.usersIndifferent || [],
          })),
        },
      },
      include: {
        demandData: content.demandData.length > 0, // Include the associated DemandData in the response
      },
    });

    return true;
  } catch (error) {
    return error;
  }
}
