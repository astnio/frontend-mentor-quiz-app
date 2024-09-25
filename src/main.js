import { initLightToggle } from './ui/lightswitch.js';
import { quizzes } from './quizManager.js';
import { initQuizChoiceButtons } from './ui/screenTransitionManager.js';

const mainQuizContainer = document.getElementById('quiz-container');

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

const quizHTML = quizzes['HTML'].quizSections[0];
const quizCSS = quizzes['CSS'].quizSections[0];
const quizJavaScript = quizzes['JavaScript'].quizSections[0];
const quizAccessibility = quizzes['Accessibility'].quizSections[0];

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
		mainQuizContainer.append(quizHTML);
	});

	btnCSSQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['CSS'].icon);
		setAppHeaderCategoryIconBg('green');
		currentQuizLabel.innerText = 'CSS';
		mainQuizContainer.append(quizCSS);
	});

	btnJSQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['JavaScript'].icon);
		setAppHeaderCategoryIconBg('blue');
		currentQuizLabel.innerText = 'JavaScript';
		mainQuizContainer.append(quizJavaScript);
	});

	btnAccessibilityQuiz.addEventListener('click', () => {
		setCurrentQuizImage(quizzes['Accessibility'].icon);
		setAppHeaderCategoryIconBg('purple');
		currentQuizLabel.innerText = 'Accessibility';
		mainQuizContainer.append(quizAccessibility);
	});
}

initLightToggle();
initQuizChoiceButtons();
initQuizButtons();
