/*
  Warnings:

  - Added the required column `term` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "term" BOOLEAN NOT NULL,
ALTER COLUMN "prescription_url" DROP NOT NULL;
