/*
  Warnings:

  - You are about to drop the column `prescription_url` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `documents_url` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Appointment" DROP COLUMN "prescription_url",
ADD COLUMN     "documents_url" TEXT NOT NULL;
