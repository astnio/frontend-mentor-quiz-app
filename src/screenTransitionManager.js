const screen1 = document.getElementById('quiz-intro-container');
const screen2 = document.getElementById('quiz-container');
const quizChoiceButtons = document.querySelectorAll('.btn-quizz-choice');

let isScreen1Visible = true;

function slideScreens() {
	console.log('me clicked');
	if (isScreen1Visible) {
		screen1.style.transform = 'translateX(-100%)';
		screen2.style.transform = 'translateX(0)';
	} else {
		screen1.style.transform = 'translateX(0)';
		screen2.style.transform = 'translateX(100%)';
	}

	isScreen1Visible = !isScreen1Visible;
}

export function initQuizChoiceButtons() {
	quizChoiceButtons.forEach((btn) => {
		btn.addEventListener('click', slideScreens);
	});
}
