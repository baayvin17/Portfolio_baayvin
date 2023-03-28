const toggleButton = document.getElementById('toggle');
const body = document.body;

toggleButton.addEventListener('change', () => {
	if (toggleButton.checked) {
		body.classList.add('dark-mode');
	} else {
		body.classList.remove('dark-mode');
	}
});