import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChartComponent from './components/ChartComponent/index.js';
import { ROUTER_PATH } from './constants/router/constantsRoutes';

class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path={ROUTER_PATH} render={() => <ChartComponent/>} />
			</Switch>
		);
	}
}

export default App;
