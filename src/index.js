import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import reducer from './reducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './config'

import AuthRoute from './component/authRoute/authRoute'
import Login from './container/login/login'
import Register from './container/register/register'


const store = createStore(reducer, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))
const Boss = () => <h1>Boss</h1>
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Route path="/boss" component={Boss}></Route>
				<Route path="/login" component={Login}></Route>
				<Route path="/register" component={Register}></Route>
			</div>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
