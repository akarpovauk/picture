import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordion from './modules/accordion';
import hamburger from './modules/hamburger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';


window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	modals();
	sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
	sliders('.main-slider-item', 'vertical');
	forms();
	mask('[name="phone"]');
	checkTextInputs('[name="name"]');
	checkTextInputs('[name="message"]');
	// showMoreStyles('.button-styles', '.styles-2');
	showMoreStyles('.button-styles', '#styles .row');
	calc('#size', '#material', '#options', '.promocode', '.calc-price');
	filter();
	pictureSize('.sizes-block');
	// accordion('.accordion-heading', '.accordion-block');
	accordion('.accordion-heading');
	hamburger('.burger-menu', '.burger');
	scrolling('.pageup');
	drop();
});