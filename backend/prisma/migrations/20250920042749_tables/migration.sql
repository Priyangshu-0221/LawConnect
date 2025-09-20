/*
  Warnings:

  - You are about to drop the column `doctor_id` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `doctor_name` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the column `doctor_speciality` on the `Appointment` table. All the data in the column will be lost.
  - You are about to drop the `Doctor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `lawyer_id` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lawyer_name` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lawyer_speciality` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Appointment" DROP CONSTRAINT "Appointment_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Appointment" DROP CONSTRAINT "Appointment_patient_id_fkey";

-- AlterTable
ALTER TABLE "public"."Appointment" DROP COLUMN "doctor_id",
DROP COLUMN "doctor_name",
DROP COLUMN "doctor_speciality",
ADD COLUMN     "lawyer_id" TEXT NOT NULL,
ADD COLUMN     "lawyer_name" TEXT NOT NULL,
ADD COLUMN     "lawyer_speciality" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Doctor";

-- DropTable
DROP TABLE "public"."Patient";

-- CreateTable
CREATE TABLE "public"."Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "gender" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lawyer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "speciality" TEXT,
    "degree" TEXT,
    "about" TEXT,
    "experience" TEXT,
    "image" TEXT NOT NULL DEFAULT 'user.jpg',
    "fees" INTEGER NOT NULL DEFAULT 500,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lawyer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_email_key" ON "public"."Client"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Lawyer_email_key" ON "public"."Lawyer"("email");

-- AddForeignKey
ALTER TABLE "public"."Appointment" ADD CONSTRAINT "Appointment_lawyer_id_fkey" FOREIGN KEY ("lawyer_id") REFERENCES "public"."Lawyer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Appointment" ADD CONSTRAINT "Appointment_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "public"."Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
