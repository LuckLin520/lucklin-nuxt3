import { PrismaClient } from '@prisma/client'
import { R } from '~/server/utils/serverUtil'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
  try {
    const data = await prisma.post.create({
      data: {
        title: '测试文章',
        authorId: 1
      }
    })
    return R.ok(data)
  } catch (error) {
    return sendError(event, createError('Failed to retrieve data!'))
  }
})
