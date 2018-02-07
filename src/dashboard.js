import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect, Route } from 'react-router-dom'
import { logout } from './user.redux.js'

const Hello= () => <h1>Hello</h1>
const Look= () => <h1>Look</h1>

@connect(
  state => state.user,
  { logout }
)
class DashBoard extends React.Component {
  render() {
    const match = this.props.match
    console.log(this.props);
    const redirectToLogin = <Redirect to='/login' />
    const dashBoard = (
    <div>
      <button onClick={this.props.logout}>登出</button>
      <ul>
        <li><Link to={`${match.url}/hello`}>Hello</Link></li>
        <li><Link to={`${match.url}/look`}>Look</Link></li>
      </ul>
      <Route path={`${match.url}/hello`} component={Hello}></Route>
      <Route path={`${match.url}/look`} component={Look}></Route>
    </div>
  )
    return  this.props.auth ? dashBoard : redirectToLogin 
  }
}

export default DashBoard