import React from 'react'
import { connect } from 'react-redux'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, List, InputItem, Button } from 'antd-mobile'
import { login } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
  state => state.user,
  { login }
)
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwd: ''
    }
    this.toRegister = this.toRegister.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  toRegister() {
    this.props.history.push('/register')
  }

  handleChange(key, value) {
    this.setState({ 
      [key]: value
    })
  }

  handleLogin() {
    this.props.login(this.state)
  }

  render() {
    return (
      <div>
        { this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null }
        <Logo></Logo>
        <h2>登录</h2>
        <WingBlank>
          <List renderHeader={() => this.props.msg}>
            <InputItem onChange={v => this.handleChange('name', v)}>用户名</InputItem>
            <WhiteSpace></WhiteSpace>
            <InputItem type='password' onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type='primary' onClick={this.handleLogin}>登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button type='primary' onClick={this.toRegister}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register
