import { initLightToggle } from './ui/lightswitch.js';
import { quizzes } from './quizManager.js';
import { initQuizChoiceButtons } from './ui/screenTransitionManager.js';

const appHeaderQuizCategory = document.querySelector(
	'.app-header-quiz-category'
);
const currentQuizLabel = document.getElementById('current-category-label');
const currentQuizImage = document.getElementById('current-quiz-label-image');

const btnHTMLQuiz = document.getElementById('btn-quiz-choice-html');
const btnCSSQuiz = document.getElementById('btn-quiz-choice-css');
const btnJSQuiz = document.getElementById('btn-quiz-choice-js');
const btnAccessibilityQuiz = document.getElementById(
	'btn-quiz-choice-accessibility'
);

function setAppHeaderCategoryIconBg(color) {
	appHeaderQuizCategory.children[0].dataset.bgColor = color;
}

function setCurrentQuizImage(value) {
	appHeaderQuizCategory.dataset.quizActive = 'true';
	currentQuizImage.src = `${value}`;
}

function initQuizButtons() {
	btnHTMLQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['HTML'].icon);
		setAppHeaderCategoryIconBg('orange');
		currentQuizLabel.innerText = 'HTML';
	});

	btnCSSQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['CSS'].icon);
		setAppHeaderCategoryIconBg('green');
		currentQuizLabel.innerText = 'CSS';
	});

	btnJSQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['JavaScript'].icon);
		setAppHeaderCategoryIconBg('blue');
		currentQuizLabel.innerText = 'JavaScript';
	});

	btnAccessibilityQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['Accessibility'].icon);
		setAppHeaderCategoryIconBg('purple');
		currentQuizLabel.innerText = 'Accessibility';
	});
}

initLightToggle();
initQuizChoiceButtons();
initQuizButtons();

console.log(quizzes);
