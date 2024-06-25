import { getResource } from '../services/requests';

const calc = (size, material, options, promocode, result) => {

	getResource('calc.json')
		.then (res => renderSelectOptionsElements(res));

	function renderSelectOptionsElements(response) {
		let obj = response;
		for (let key in obj) {
			let parentId = key;
			let parentElem = document.querySelector(`#${parentId}`);
			let selectOptions = obj[key];
			for (let option in selectOptions) {
				
				let optionValue = selectOptions[option];
				let optionElem = document.createElement('option');

				optionElem.value = `${optionValue}`;
				optionElem.textContent =`${option}`;
				parentElem.appendChild(optionElem);
			}
		}
	}

	const sizeBlock = document.querySelector(size),
		materialBlock = document.querySelector(material),
		optionBlock = document.querySelector(options),
		promocodeBlock = document.querySelector(promocode),
		resultBlock = document.querySelector(result);

	let sum = 0;
	let promo = 0.7;

	const calcFunc = () => {
		sum = Math.round((+sizeBlock.value)*(+ materialBlock.value) + (+optionBlock.value));

		if(sizeBlock.value == '' || materialBlock.value == '') {
			resultBlock.textContent = 'Please select size and material';
		} else if (promocodeBlock.value == 'IWANTPOPART') {
			sum = sum * promo;
			resultBlock.textContent = Math.round(sum);
		} else {
			resultBlock.textContent = sum;
		}
	};

	sizeBlock.addEventListener('change', calcFunc);
	materialBlock.addEventListener('change', calcFunc);
	optionBlock.addEventListener('change', calcFunc);
	promocodeBlock.addEventListener('input', calcFunc);

};

export default calc;