import { postData } from '../services/requests';

const drop = () => {
	const fileInputs = document.querySelectorAll('[name="upload"]');

	['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, preventDefaults, false);
		});
	});

	function preventDefaults(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	function highlight(item) {
		item.closest('.file_upload').style.border = '5px solid yelllow';
		item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
	}

	function unhighlight(item) {
		item.closest('.file_upload').style.border = 'none';
		item.closest('.file_upload').style.backgroundColor = 'inherit';
	}

	['dragenter','dragover'].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => highlight(input), false);
		});
	});

	['dragleave','drop'].forEach(eventName => {
		fileInputs.forEach(input => {
			input.addEventListener(eventName, () => unhighlight(input), false);
		});
	});

	fileInputs.forEach(input => {
		input.addEventListener('drop', (e)=> {
			input.files = e.dataTransfer.files;

			let dots;
			const arr = input.files[0].name.split('.');
			arr[0].length > 15 ? dots = '...' : dots = '.';
			const name = arr[0].substring(0, 15) + dots + arr[arr.length - 1];
			input.previousElementSibling.textContent = name;

			const formData = new FormData();
			formData.append('file', input.files[0]);

			postData('assets/server.php', formData)
				.then(result => {
					console.log(result);
				})
				.catch (() => {
					console.log(error);
				});

		});
	});
};

export default drop;