import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Radio from './Radio';

import './App.css';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/radio" component={Radio} />
			</Switch>
		</Router>
	);
}

export default App;
