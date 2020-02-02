import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigationbar from './common/navigation-bar/Navigationbar';
import Routing from './routing';

const App = () => {
	return <div className="App">
		<Navigationbar />
		<Routing />
	</div>
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
