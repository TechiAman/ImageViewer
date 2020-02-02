import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './screens/login/Login';
import Home from './screens/home/Home';

const Routing = () => (
    <Router>
			<div>
				<Route path='/' exact component={Login} />
				<Route path='/home' component={Home} />          
			</div>
    </Router>
)

export default Routing;