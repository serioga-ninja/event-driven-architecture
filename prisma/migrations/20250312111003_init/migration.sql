-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" VARCHAR NOT NULL,
    "phone" VARCHAR NOT NULL DEFAULT '',
    "firstName" VARCHAR NOT NULL DEFAULT '',
    "lastName" VARCHAR NOT NULL DEFAULT '',
    "isTfaEnabled" BOOLEAN NOT NULL DEFAULT false,
    "tfaSecret" VARCHAR DEFAULT '',
    "entityStatus" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "visibility" VARCHAR NOT NULL DEFAULT 'public',
    "entityStatus" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usersId" TEXT,

    CONSTRAINT "Posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Posts" ADD CONSTRAINT "Posts_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
