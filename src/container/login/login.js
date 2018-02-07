import React from 'react'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwd: ''
    }
    this.toRegister = this.toRegister.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  toRegister() {
    this.props.history.push('/register')
  }

  handleChange(key, value) {
    this.setState({ 

      [key]: value
    })
  }

  render() {
    return (
      <div>
        <Logo></Logo>
        <h2>登录</h2>
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handleChange('name', v)}>用户名</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
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
