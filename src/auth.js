import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from './user.redux.js'
import axios from 'axios'

@connect(
	state => state.user,
	{ login }
)
class Auth extends React.Component {
	componentDidMount() {
		axios.get('/data')
			.then(res => console.log(res))
	}
  render() {
		return (
			<div>
				{ this.props.auth ? <Redirect to='/dashboard' /> : null }	
				<button onClick={this.props.login}>登录</button>
			</div>
		)
  }
}

export default Auth;
