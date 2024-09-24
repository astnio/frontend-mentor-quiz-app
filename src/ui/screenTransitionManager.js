const screen1 = document.getElementById('quiz-intro-container');
const screen2 = document.getElementById('quiz-container');
const quizChoiceButtons = document.querySelectorAll(
	'.btn-quiz-category-choice'
);
// const submitButton = document.getElementById('quiz-submit-question');

let isScreen1Visible = true;

function slideScreens() {
	if (isScreen1Visible) {
		screen1.style.transform = 'translateX(-100%)';
		screen2.style.transform = 'translateX(0)';
	} else {
		screen1.style.transform = 'translateX(0)';
		screen2.style.transform = 'translateX(100%)';
	}

	isScreen1Visible = !isScreen1Visible;
	screen2.style.visibility = 'visible';
}

export function initQuizChoiceButtons() {
	quizChoiceButtons.forEach((btn) => {
		btn.addEventListener('click', slideScreens);
	});
	// submitButton.addEventListener('click', slideScreens);
}
