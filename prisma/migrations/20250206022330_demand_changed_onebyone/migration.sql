/*
  Warnings:

  - Added the required column `controlDataId` to the `DemandData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DemandData" ADD COLUMN     "controlDataId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ControlData" (
    "id" SERIAL NOT NULL,
    "initialDate" TIMESTAMP(3) NOT NULL,
    "finalDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ControlData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DemandData" ADD CONSTRAINT "DemandData_controlDataId_fkey" FOREIGN KEY ("controlDataId") REFERENCES "ControlData"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
