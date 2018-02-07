import React from 'react'
import { connect } from 'react-redux'
import Logo from '../../component/logo/logo'
import { WingBlank, WhiteSpace, List, InputItem, Radio, Button } from 'antd-mobile'
import { register } from '../../redux/user.redux'

@connect(
  state => state.user,
  { register }
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'genius',
      name: '',
      pwd: '',
      repeatPwd: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(key, value) {
    this.setState({ [key]: value })
  }

  handleClick() {
    this.props.register(this.state)
  }

  render() {
    const RadioItem = Radio.RadioItem

    return (
      <div>
        <Logo></Logo>
        <h2>登录</h2>
        <List renderHeader={() => this.props.msg}>
          <InputItem onChange={v => this.handleChange('name', v)}>用户名</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem type='password' onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem type='password' onChange={v => this.handleChange('repeatPwd', v)}>确认密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem checked={this.state.type === 'genius'} onChange={() => this.handleChange('type', 'genius')}>牛人</RadioItem>
          <RadioItem checked={this.state.type === 'boss'} onChange={() => this.handleChange('type', 'boss')}>BOSS</RadioItem>
        </List>
        <WhiteSpace></WhiteSpace>
        <Button type='primary' onClick={this.handleClick}>注册</Button>
      </div>
    )
  }
}

export default Login

