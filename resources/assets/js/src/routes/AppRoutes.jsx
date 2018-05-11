//Dependencies
import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
//Components
import App from '../components/App'
import Crud from '../components/vehicles/Crud';

const AppRoutes = () => 
	<App>
		<div>
		<Switch> {/*funciona como switch(case) estructura de control*/}
			<Route path='/' component={Crud} />
			{/*<Route path='/vehicles' component={Crud} />*/}
		</Switch>
		</div>
	</App>

export default AppRoutes