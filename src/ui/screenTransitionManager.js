const quizIntro = document.getElementById('quiz-intro-container');
const quizContainer = document.getElementById('quiz-container');
const quizChoiceButtons = document.querySelectorAll(
	'.btn-quiz-category-choice'
);

function slideScreens() {
	console.log('Sliding screens...');
	console.log(quizContainer.style);
	quizIntro.style.transform = 'translateX(-100%)';
	quizContainer.style.transform = 'translateX(0)';

	quizContainer.style.visibility = 'visible';
}

export function initQuizChoiceButtons() {
	quizChoiceButtons.forEach((btn) => {
		btn.addEventListener('click', slideScreens);
	});
	// submitButton.addEventListener('click', slideScreens);
}
