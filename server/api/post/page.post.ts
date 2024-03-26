import { Prisma, PrismaClient } from '@prisma/client'
import { DefaultArgs } from '@prisma/client/runtime/library'
import { R } from '~/server/utils/serverUtil'

const current = 1
const size = 10
export default defineEventHandler(async event => {
  try {
    const prisma = new PrismaClient()

    const total = await prisma.post.count({
      where: {
        title: {
          contains: '文章'
        }
      }
    })
    const records = await prisma.post.findMany({
      where: {
        title: {
          contains: '文章'
        }
      },
      include: {
        author: true
      },
      skip: (current - 1) * size,
      take: size
    })

    const pageVo = PageVo.create(current, size, total, records)
    return R.ok(pageVo)
  } catch (error) {
    return R.err(error)
  }
})
