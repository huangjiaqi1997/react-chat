export const getRedirectPath = ({ type, avatar }) => {
  // 注册后 跳转
  let url = type === 'boss' ? '/boss' : '/genius'

  if (!avatar) {
    url += 'info'
  }

  return url
}
