import { initLightToggle } from './lightswitch.js';
import { quizzes } from './quizManager.js';
import { initQuizChoiceButtons } from './screenTransitionManager.js';

const appHeaderQuizCategory = document.querySelector(
	'.app-header-quiz-category'
);
const currentQuizImage = document.getElementById('current-quiz-label-image');

const btnHTMLQuiz = document.getElementById('btn-quiz-choice-html');
const btnCSSQuiz = document.getElementById('btn-quiz-choice-css');
const btnJSQuiz = document.getElementById('btn-quiz-choice-js');
const btnAccessibilityQuiz = document.getElementById(
	'btn-quiz-choice-accessibility'
);

function setCurrentQuizImage(value) {
	appHeaderQuizCategory.classList.remove('hidden');
	currentQuizImage.src = `${value}`;
}

function initQuizButtons() {
	btnHTMLQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['HTML'].icon);
	});

	btnCSSQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['CSS'].icon);
	});

	btnJSQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['JavaScript'].icon);
	});

	btnAccessibilityQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['Accessibility'].icon);
	});
}

initLightToggle();
initQuizChoiceButtons();
initQuizButtons();
