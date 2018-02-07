import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component {
  componentDidMount() {
    // 排除 在 /login /register 的情况
    const publicPath = ['/login', '/register']
    const pathname = this.props.location.pathname
    if (publicPath.indexOf(pathname) > -1) {
      return null
    }

    // 获取用户信息，进行跳转
    axios.get('/user/info')
      .then(res => {
        if (res.status === 200) {

          if (res.data.code === 0) {
            // 有登录信息
          } else {
            this.props.history.push('/login')
          }

          console.log(res);
        }
      })
  }

  render() {
    return null
  }
}

export default AuthRoute
