//css animation

/* const accordion = (triggersSelector, itemsSelector) => {
	
	const btns = document.querySelectorAll(triggersSelector),
		  blocks = document.querySelectorAll(itemsSelector);

	blocks.forEach(block => {
		block.classList.add('animated', 'fadeInDown');
	});

	btns.forEach(btn => {
		btn.addEventListener('click', function() {
			if(!this.classList.contains('active')) {
				btns.forEach(btn => {
					btn.classList.remove('active', 'active-style');
				});
				this.classList.add('active', 'active-style');
			}
		});
	});
}; */

// js animation
const accordion = (triggersSelector) => {
	const btns = document.querySelectorAll(triggersSelector);

	function removeActiveClass(clickedBtn) {
		btns.forEach(btn => {
			if (btn !== clickedBtn) {
				btn.classList.remove('active-style');
				btn.nextElementSibling.classList.remove('active-content');
				btn.nextElementSibling.style.maxHeight = '0px';
			} 
		});
	}
	btns.forEach(btn => {
		btn.addEventListener('click', function() {
			removeActiveClass(this);
			this.classList.toggle('active-style');
			this.nextElementSibling.classList.toggle('active-content');

			if(this.classList.contains('active-style')) {
				// this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
				this.nextElementSibling.style.maxHeight = 'unset';
			} else {
				this.nextElementSibling.style.maxHeight = '0px';
			}
		});
	});
};
export default accordion;