/*
  Warnings:

  - Made the column `prescription_url` on table `Appointment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `term` on table `Appointment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Appointment" ALTER COLUMN "prescription_url" SET NOT NULL,
ALTER COLUMN "term" SET NOT NULL;
