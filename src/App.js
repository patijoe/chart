import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChartComponent from './components/ChartComponent/index.js';

import { getChart } from './services/request';
import { ROUTER_PATH } from './constants/router/constantsRoutes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      data: []
    };
  }

  componentDidMount = async() => {
    await this.getChartFetch();
    
  }
  
  getChartFetch = () => 
    getChart()
    .then(response => 
      this.setState({
        data: response.data
      })
      );
  
  
	render() {
    const {data} = this.state;
		return (
			<Switch>
				<Route exact path={ROUTER_PATH} render={() => <ChartComponent data={data} />} 
        />
			</Switch>
		);
	}
}

export default App;
