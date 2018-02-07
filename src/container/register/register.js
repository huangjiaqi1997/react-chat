import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, List, InputItem, Radio, Button } from 'antd-mobile'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'genius'
    }
  }

  render() {
    const RadioItem = Radio.RadioItem

    return (
      <div>
        <Logo></Logo>
        <h2>登录</h2>
        <List>
          <InputItem>用户名</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem>密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem>确认密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem checked={this.state.type === 'genius'} onChange={() => this.setState({ type: 'genius' })}>牛人</RadioItem>
          <RadioItem checked={this.state.type === 'boss'} onChange={() => this.setState({ type: 'boss' })}>BOSS</RadioItem>
        </List>
        <WhiteSpace></WhiteSpace>
        <Button type='primary'>注册</Button>
      </div>
    )
  }
}

export default Login

