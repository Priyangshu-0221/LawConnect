/*
  Warnings:

  - The `address` column on the `Doctor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `address` column on the `Patient` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Doctor" ALTER COLUMN "image" SET DEFAULT 'user.jpg',
DROP COLUMN "address",
ADD COLUMN     "address" TEXT[] DEFAULT ARRAY['', '']::TEXT[];

-- AlterTable
ALTER TABLE "Patient" DROP COLUMN "address",
ADD COLUMN     "address" TEXT[] DEFAULT ARRAY['', '']::TEXT[];
