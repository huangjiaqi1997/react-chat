import React from 'react'
import { connect } from 'react-redux'
import { NavBar, InputItem, Button, TextareaItem } from 'antd-mobile'
import AvatarSelector from '../../component/avatarSelector/avatarSelector'
import { update } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'

@connect(
  state => state.user,
  { update }
)
class BossInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      company: '',
      desc: '',
      money: '',
      avatar: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(key, value) {
    this.setState({ [key]: value })
  }

  render() {
    const redirectTo = this.props.redirectTo
    const path = this.props.location.pathname
    return (
      <div>
        { redirectTo && redirectTo !== path ? <Redirect to={this.props.redirectTo}></Redirect> : null }
        <NavBar mode='dark'>Boss信息完善页面</NavBar>
        <AvatarSelector avatarSelect={(imgname => this.setState({avatar: imgname}))} />
        <h3>信息完善</h3>
        <InputItem onChange={v => this.handleChange('title', v)}>标题</InputItem>
        <InputItem onChange={v => this.handleChange('company', v)}>公司</InputItem>
        <InputItem onChange={v => this.handleChange('money', v)}>薪资</InputItem>
        <TextareaItem onChange={v => this.handleChange('desc', v)} rows={3} autoHeight title='简介' />
        <Button type='primary' onClick={() => this.props.update(this.state)}>保存</Button>
      </div>
    )
  }
}

export default BossInfo
