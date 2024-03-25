import { useError } from 'nuxt/app'
import { ServerCache } from '~/utils/serverUtil'
import { QYWX_getAccessToken, QYWX_sendMessage, SecretTypeEnum, QYWX_config } from '~/utils/thirdparty'

export default defineEventHandler(async event => {
  const body = await readBody(event)
  throw createError({ statusCode: 400, statusMessage: 'Bad Request' })
  return '12313132'
  // 获取access_token
  // let access_token = ServerCache.get('access_token')
  // if (!access_token) {
  //   access_token = await QYWX_getAccessToken(SecretTypeEnum.MESSAGE)
  //   ServerCache.set('access_token', access_token!, 7000) //官方默认7200(两小时)
  // }
  // //根据规则发送指定用户
  // // todo

  // //发送消息
  // const data = {
  //   touser: 'ZhaoZhiLin',
  //   msgtype: 'text',
  //   agentid: QYWX_config.AGENT_ID,
  //   text: {
  //     content: '测试自己ha'
  //   }
  // }
  // await QYWX_sendMessage(access_token!, data)
})
