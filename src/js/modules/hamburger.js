const hamburger = (menuSelector, hamburgerSelector)=> {
	const menuElem = document.querySelector(menuSelector),
		  hamburgerElem = document.querySelector(hamburgerSelector);

	menuElem.style.display = 'none';

	hamburgerElem.addEventListener('click', () => {
		if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
			menuElem.style.display = 'block';
		} else {
			menuElem.style.display = 'none';
		}
	});

	window.addEventListener('resize', () => {
		if (window.screen.availWidth > 992) {
			menuElem.style.display = 'none';
		}
	});
};

export default hamburger;