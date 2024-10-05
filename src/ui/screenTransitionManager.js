const quizIntro = document.getElementById('quiz-intro-container');
const quizContainer = document.getElementById('quiz-container');
const quizEndScreen = document.getElementById('quiz-end-screen');
const quizChoiceButtons = document.querySelectorAll(
	'.btn-quiz-category-choice'
);

function slideScreens() {
	quizIntro.style.transform = 'translateX(-100%)';
	quizContainer.style.transform = 'translateX(0)';
	quizEndScreen.style.transform = 'translateX(100%)';

	quizContainer.style.visibility = 'visible';
}

export function initQuizChoiceButtons() {
	quizChoiceButtons.forEach((btn) => {
		btn.addEventListener('click', slideScreens);
	});
}
