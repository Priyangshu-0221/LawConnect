/*
  Warnings:

  - You are about to drop the column `comment` on the `Review` table. All the data in the column will be lost.
  - Added the required column `descriptions` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Review" DROP COLUMN "comment",
ADD COLUMN     "descriptions" TEXT NOT NULL;
