const lightToggle = document.getElementById('light-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const localStorageName = 'lightMode';

const setLightMode = (mode = 'dark' | 'light') => {
	document.body.dataset.lightMode = mode;

	localStorage.setItem(localStorageName, mode);
};

const initLightMode = () => {
	if (!localStorage.getItem(localStorageName)) {
		if (prefersDarkScheme) {
			setLightMode('dark');
			lightToggle.checked = true;
		} else {
			setLightMode('light');
			lightToggle.checked = false;
		}
	} else {
		setLightMode(localStorage.getItem(localStorageName));
	}
};

export const initLightToggle = () => {
	initLightMode();
	lightToggle.addEventListener('change', () => {
		setLightMode(lightToggle.checked ? 'dark' : 'light');
	});
};
