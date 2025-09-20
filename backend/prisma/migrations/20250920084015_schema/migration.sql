/*
  Warnings:

  - You are about to drop the column `patient_id` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Appointment" DROP CONSTRAINT "Appointment_patient_id_fkey";

-- AlterTable
ALTER TABLE "public"."Appointment" DROP COLUMN "patient_id",
ADD COLUMN     "client_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Appointment" ADD CONSTRAINT "Appointment_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "public"."Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
