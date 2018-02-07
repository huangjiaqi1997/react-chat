import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.toRegister = this.toRegister.bind(this)
  }

  toRegister() {
    this.props.history.push('/register')
  }

  render() {
    return (
      <div>
        <Logo></Logo>
        <h2>登录</h2>
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type='primary'>登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button type='primary' onClick={this.toRegister}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register
