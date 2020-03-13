import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChartComponent from './components/ChartComponent/index.js';
import { ROUTER_PATH } from './constants/router/constantsRoutes';

class App extends React.Component {
	render() {
		const { competitions } = this.state;
		return (
			<Switch>
				<Route exact path={ROUTER_PATH} render={() => <ChartComponent competitions={competitions} />} />
			</Switch>
		);
	}
}

export default App;
