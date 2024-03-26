import { PrismaClient } from '@prisma/client'
import { R } from '~/server/utils/serverUtil'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  try {
    const data = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@example.com'
      }
    })
    return R.ok(data)
  } catch (error) {
    return R.err(error)
  }
})
