import React from 'react'
import ReactDOM from 'react-dom'
import DashBoard from './dashboard'
import Auth from './auth'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import reducers from './reducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './config'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/dashboard" component={DashBoard}></Route>
				<Route path="/login" component={Auth}></Route>
				<Redirect to="/dashboard"></Redirect>
			</Switch>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root')
);
