/*
  Warnings:

  - Made the column `experience` on table `Lawyer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Lawyer" ALTER COLUMN "experience" SET NOT NULL;
