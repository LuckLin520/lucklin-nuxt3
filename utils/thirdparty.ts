export const QYWX_config = {
  ACCESS_TOKEN_URL: 'https://qyapi.weixin.qq.com/cgi-bin/gettoken',
  CORP_ID: 'wwe395ec7f1726f920',
  AGENT_ID: 1000003,
  MESSAGE_SECRET: '4763IIhKazomZQFtCGI9xWIn3xLeRlr-2-bmrWejEV0',
  MESSAGE_URL: 'https://qyapi.weixin.qq.com/cgi-bin/message/send'
}
interface WX_RESPONSE {
  errcode: number
  errmsg: string
}
interface ResAccessToken extends WX_RESPONSE {
  access_token: string
  expires_in: number
}
export enum SecretTypeEnum {
  MESSAGE = 'MESSAGE'
}
type QYWX_getAccessToken = (secretType: SecretTypeEnum) => Promise<string | undefined>
export const QYWX_getAccessToken: QYWX_getAccessToken = async secretType => {
  const { ACCESS_TOKEN_URL, CORP_ID } = QYWX_config
  const params = {
    corpid: CORP_ID,
    corpsecret: QYWX_config[`${secretType}_SECRET` as keyof typeof QYWX_config]
  }
  const data = await $fetch<ResAccessToken>(ACCESS_TOKEN_URL, { params })

  if (data.errcode === 0) {
    return data.access_token
  }
  throw new Error(`$获取${secretType} access_token失败,errmsg: ${data.errmsg}`)
}
interface ResSendMessage extends WX_RESPONSE {
  //
}
interface ReqSendMessage {
  touser: string
  msgtype: string
  agentid: number
  text: { content: string }
}
export const QYWX_sendMessage = async (access_token: string, req: ReqSendMessage) => {
  const { MESSAGE_URL } = QYWX_config
  const params = {
    access_token
  }
  const data = await $fetch<ResSendMessage>(MESSAGE_URL, { method: 'POST', params, body: req })
  if (data.errcode !== 0) {
    throw new Error(`$发送企业消息失败,errmsg: ${data.errmsg}`)
  }
}
