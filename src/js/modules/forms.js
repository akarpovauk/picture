// import checkNumInputs from './checkNumInputs';
// import {closeWindows, closeModal} from './modals';

const forms = () => {
	const allForms = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		upload = document.querySelectorAll('[name = "upload"]'),
		text = document.querySelectorAll('[name="message"]');

	// checkNumInputs('input[name = "user_phone"]');

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо, скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...',
		spinner: 'assets/img/spinner.gif',
		ok: 'assets/img/ok.png',
		fail: 'assets/img/fail.png'
	};

	const postData = async (url, data) => {
		// document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: 'POST',
			body: data
		});

		return await res.text();
	};

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
		upload.forEach(item => {
			item.previousElementSibling.textContent = 'Файл не выбран';
		});
		text.forEach(item => {
			item.value = '';
		});
	};

	upload.forEach(item => {
		item.addEventListener('input', () => {
			console.log(item.files[0]);

			let dots;
			const arr = item.files[0].name.split('.');
			arr[0].length > 15 ? dots = '...' : dots = '.';
			const name = arr[0].substring(0, 15) + dots + arr[arr.length - 1];
			item.previousElementSibling.textContent = name;
		});
	});

	allForms.forEach(form => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			// form.appendChild(statusMessage);
			form.parentNode.appendChild(statusMessage);

			form.classList.add('animated', 'fadeOutUp');
			setTimeout(() => {
				form.style.display = 'none';
			}, 400);

			let statusImg = document.createElement('img');
			statusImg.setAttribute('src', message.spinner);
			statusImg.classList.add('animated', 'fadeInUp');
			statusMessage.appendChild(statusImg);

			let textMessage = document.createElement('div');
			textMessage.textContent = message.loading;
			statusMessage.appendChild(textMessage);

			const path = {
				designer: 'assets/server.php',
				question: 'assets/question.php'
			};
			
			// let parentElement = `.${form.closest('[data-modal]').attributes.value}`;
			
			const formData = new FormData(form);
			let api;
			form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.question;
			console.log(api);

			postData(api, formData)
				.then(res => {
					console.log(`my res is ${res}`);
					statusImg.setAttribute('src', message.ok);
					textMessage.textContent = message.success;
				})
				.catch(() => {
					statusImg.setAttribute('src', message.fail);
					textMessage.textContent = message.failure;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
						form.style.display = 'block';
						form.classList.remove('fadeOutUp');
						form.classList.add('fadeInUp');
						// closeWindows();
						// closeModal(parentElement);

						// console.log(state);
						// for (let key in state) {
						// 	if(key == 'form') {
						// 		state[key] = 0;
						// 	} else if(key == 'type') {
						// 		state[key] = 'tree';
						// 	} else {
						// 		delete state[key];
						// 	}
						// }
						// console.log(state);
					}, 3000);
				});
		});
	});
};

export default forms;