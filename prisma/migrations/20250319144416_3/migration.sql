/*
  Warnings:

  - Made the column `usersId` on table `Comments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `postsId` on table `Comments` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_postsId_fkey";

-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_usersId_fkey";

-- AlterTable
ALTER TABLE "Comments" ALTER COLUMN "usersId" SET NOT NULL,
ALTER COLUMN "postsId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_postsId_fkey" FOREIGN KEY ("postsId") REFERENCES "Posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
