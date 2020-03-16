import React from 'react';
import { Bar } from 'react-chartjs-2';


class ChartComponent extends React.Component {
transformDataToChart = ( data = [] ) => {
	const transformedData = {
		labels: ['January', 'February', 'March'],
		datasets: [{
			label: 'My First dataset',
		  // backgroundColor: "red",
			// borderColor: "green",
			data
		}]
	}
	console.log('data22ddddd2', transformedData);
	return transformedData;
}

	render() {
		const { data } = this.props;
		console.log('data222', data && data);
		return (
			<div>
				<h1>VENGA</h1>
				<Bar data={this.transformDataToChart(data)} />
			</div>
		);
	}
}

export default ChartComponent;


// const a = { abc: 1, d:2 };

// // copio por referencia, es decir si hago un camvio en aa o en a, me cambiaria en los dos sitios
// const aa = a; // aa = { abc: 1, d:2 } 

// // copio por valor, b es el mismo objeto que a, pero  si hago cambios en b, no aplican en a
// const b = { ...a }; // b = { abc: 1, d:2 }


// const c = { a , n: 4}; // c = { a: { abc: 1 }, n:4 }