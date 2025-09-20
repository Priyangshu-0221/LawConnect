/*
  Warnings:

  - The `address` column on the `Lawyer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Lawyer" ADD COLUMN     "achievements" TEXT[],
ADD COLUMN     "professional_memberships" TEXT[],
DROP COLUMN "address",
ADD COLUMN     "address" JSONB;
