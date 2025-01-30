-- CreateTable
CREATE TABLE "DemandData" (
    "id" SERIAL NOT NULL,
    "key" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "who" TEXT NOT NULL,
    "supp" TEXT NOT NULL,
    "demand" TEXT NOT NULL,
    "analist" TEXT NOT NULL,
    "aprov" TEXT NOT NULL,
    "dev" TEXT NOT NULL,
    "test" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "imp" TEXT,
    "show" BOOLEAN NOT NULL,
    "usersApproved" TEXT,
    "usersRefused" TEXT,
    "usersIndifferent" TEXT,

    CONSTRAINT "DemandData_pkey" PRIMARY KEY ("id")
);
