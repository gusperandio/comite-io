/*
  Warnings:

  - You are about to drop the column `imp` on the `DemandData` table. All the data in the column will be lost.
  - You are about to drop the column `key` on the `DemandData` table. All the data in the column will be lost.
  - You are about to drop the column `show` on the `DemandData` table. All the data in the column will be lost.
  - The `usersApproved` column on the `DemandData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `usersRefused` column on the `DemandData` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `usersIndifferent` column on the `DemandData` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "DemandData" DROP COLUMN "imp",
DROP COLUMN "key",
DROP COLUMN "show",
DROP COLUMN "usersApproved",
ADD COLUMN     "usersApproved" TEXT[],
DROP COLUMN "usersRefused",
ADD COLUMN     "usersRefused" TEXT[],
DROP COLUMN "usersIndifferent",
ADD COLUMN     "usersIndifferent" TEXT[];
