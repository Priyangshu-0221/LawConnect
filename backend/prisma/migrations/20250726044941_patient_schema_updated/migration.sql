-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "address" TEXT;

-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "fees" INTEGER NOT NULL DEFAULT 500,
    "address" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_email_key" ON "Doctor"("email");
