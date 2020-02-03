import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './screens/login/Login';
import Home from './screens/home/Home';
import Profile from './screens/profile/Profile';
const Routing = () => (
    <Router>
			<div>
				<Route path='/' exact component={Login} />
				<Route path='/home' component={Home} /> 
				<Route path='/profile' component={Profile} />           
			</div>
    </Router>
)

export default Routing;