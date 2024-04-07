export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
export const insertScript = (src: string) => {
  const script = document.createElement('script')
  script.src = src
  document.body.appendChild(script)
  return new Promise(resolve => {
    script.onload = () => {
      resolve(true)
    }
  })
}
