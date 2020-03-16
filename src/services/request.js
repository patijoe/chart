import { GET_CHART } from '../constants/service/rest';

// Para meter cabeceras en fetch:
// const misCabeceras = new Headers({
// 	'X-Auth-Token': '99a616a5ee384c24bc24ba68b44fb5bd'
// });
// const miInit = {
// 	method: 'GET',
// 	headers: misCabeceras
// };

const miInit = {
	method: 'GET'
};

export const getChart = () => fetch(GET_CHART, miInit).then(response => response.json());