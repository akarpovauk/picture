import { getResource } from '../services/requests';
// show elements from html
/* const showMoreStyles = (trigger, styles) => {
	const cards = document.querySelectorAll(styles);
	const btn = document.querySelector(trigger);

	show elements from html
	cards.forEach(card => {
		card.classList.add('animated', 'fadeInUp');
	});

	btn.addEventListener('click', () => {
		cards.forEach(card => {
			card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
			card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
		});

		// btn.styles.display = 'none';
		btn.remove();
	});

}; */

// show elements from json db
const showMoreStyles = (trigger, wrapper) => {
	
	const btn = document.querySelector(trigger);

	btn.addEventListener('click', function() {
		// getResource('http://localhost:3000/styles')
		getResource('db.json')
			.then(res => createCards(res.styles))
			// .catch(error => console.log(error));
			.catch(error => showError(error));

		this.remove();
	});

	function createCards(response) {
		response.forEach(({src, title, link}) => {
			let card = document.createElement('div');
			card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
			card.innerHTML = `
				<div class="styles-block">
					<img src=${src} alt = "style">
					<h4>${title} </h4>
					<a href=${link} >Подробнее</a>
				</div>
			`;

			document.querySelector(wrapper).appendChild(card);
		});
	}

	function showError(errorResponse) {
		let err = document.createElement('p');
		err.classList.add('animated', 'fadeInUp');
		err.innerHTML = `
			<p class=p-heading>${errorResponse}</p>
		`;

		document.querySelector(wrapper).appendChild(err);

		setTimeout(() => {
			err.remove();
		}, 10000);
	}

};

export default showMoreStyles;