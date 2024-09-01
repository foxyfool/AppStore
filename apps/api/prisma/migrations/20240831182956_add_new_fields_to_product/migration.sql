/*
  Warnings:

  - You are about to drop the column `videoUrl` on the `Product` table. All the data in the column will be lost.
  - Added the required column `battery` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `operatingSystem` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ram` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "videoUrl",
ADD COLUMN     "battery" TEXT NOT NULL,
ADD COLUMN     "operatingSystem" TEXT NOT NULL,
ADD COLUMN     "ram" INTEGER NOT NULL,
ALTER COLUMN "imei" DROP NOT NULL;
