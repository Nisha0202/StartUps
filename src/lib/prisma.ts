// auth.ts or another service file

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(name: string, image: string, githubId: string) {
  const user = await prisma.user.create({
    data: {
      name,
      image,
 
    },
  });
  return user;
}



