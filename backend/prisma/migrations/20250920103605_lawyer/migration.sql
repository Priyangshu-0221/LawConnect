/*
  Warnings:

  - You are about to drop the column `patient_age` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `patient_contact_number` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `patient_first_name` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `patient_gender` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `patient_last_name` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `client_age` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_contact_number` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_first_name` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_gender` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_last_name` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Appointment" DROP COLUMN "patient_age",
DROP COLUMN "patient_contact_number",
DROP COLUMN "patient_first_name",
DROP COLUMN "patient_gender",
DROP COLUMN "patient_last_name",
ADD COLUMN     "client_age" INTEGER NOT NULL,
ADD COLUMN     "client_contact_number" TEXT NOT NULL,
ADD COLUMN     "client_first_name" TEXT NOT NULL,
ADD COLUMN     "client_gender" TEXT NOT NULL,
ADD COLUMN     "client_last_name" TEXT NOT NULL;
