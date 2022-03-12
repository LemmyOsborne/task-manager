import { PrismaClient } from "@prisma/client"
import prisma from "../src/lib/prisma"

export type Context = {
  prisma: PrismaClient
}

export const createContext = async ({ req, res }: any): Promise<Context> => {
  return {
    prisma,
  }
}
