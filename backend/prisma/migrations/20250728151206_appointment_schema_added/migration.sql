/*
  Warnings:

  - Added the required column `doctor_name` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctor_speciality` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ADD COLUMN     "doctor_name" TEXT NOT NULL,
ADD COLUMN     "doctor_speciality" TEXT NOT NULL;
