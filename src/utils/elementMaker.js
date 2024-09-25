export function QuizSection(
	currentQuestionNumber,
	totalQuestions,
	question,
	options,
	answer
) {
	const quizSection = createQuizSection();

	const questionHeader = createQuestionHeader();
	const questionSubheading = createQuestionSubheading(
		currentQuestionNumber,
		totalQuestions
	);
	const questionBody = createQuestionBody(question);
	const questionProgressBar = createQuestionProgressBar(
		currentQuestionNumber,
		totalQuestions
	);
	const questionsContainer = createQuizSectionQuestionsContainer();
	const questionsList = createQuizQuestionsList(options);
	const btnSubmit = createSubmitButton(answer);

	questionHeader.appendChild(questionSubheading);
	questionHeader.appendChild(questionBody);
	questionHeader.appendChild(questionProgressBar);

	quizSection.appendChild(questionHeader);

	questionsContainer.appendChild(questionsList);
	questionsContainer.appendChild(btnSubmit);

	quizSection.appendChild(questionsContainer);

	quizSection.dataset.test = currentQuestionNumber;
	quizSection.style.transform = `translateX(${
		(currentQuestionNumber - 1) * 100
	}%)`;

	return quizSection;
}

const createQuizSection = () => {
	const quizSectionElement = document.createElement('section');
	quizSectionElement.classList.add('auto-inline-margin');
	return quizSectionElement;
};

const createQuestionHeader = () => {
	const questionHeader = document.createElement('div');
	questionHeader.className = 'question-header max-width auto-inline-margin';
	return questionHeader;
};

const createQuestionSubheading = (currentQuestion, totalQuestions) => {
	const h3 = document.createElement('h3');
	h3.className = 'body-s subtitle';
	h3.innerHTML = `Question <span>${currentQuestion}</span> of ${totalQuestions}`;
	return h3;
};

const createQuestionBody = (question) => {
	const questionBody = document.createElement('p');
	questionBody.className = 'quiz-question-body';
	questionBody.textContent = question;
	return questionBody;
};

const createQuestionProgressBar = (currentQuestion, totalQuestions) => {
	const progressBarContainer = document.createElement('div');
	progressBarContainer.id = 'quiz-progress-bar-container';
	const progressBar = document.createElement('div');
	progressBar.id = 'quiz-progress-bar';
	progressBarContainer.appendChild(progressBar);

	const currentProgress = (currentQuestion / totalQuestions) * 100;

	progressBar.style.width = `${currentProgress}%`;

	return progressBarContainer;
};

const createQuizSectionQuestionsContainer = () => {
	const quizSectionQuestionsContainer = document.createElement('div');
	quizSectionQuestionsContainer.id = 'quiz-section-questions-container';
	quizSectionQuestionsContainer.className = 'max-width auto-inline-margin';
	return quizSectionQuestionsContainer;
};

const createQuizQuestionElement = (option, letter) => {
	const quizQuestionElement = document.createElement('li');
	const quizQuestionButtonElement = document.createElement('button');
	const quizQuestionBtnIcon = document.createElement('span');
	const quizQuestionBtnLabel = document.createElement('span');

	quizQuestionButtonElement.classList.add('button');
	quizQuestionButtonElement.classList.add('btn-quiz-button');
	quizQuestionButtonElement.classList.add('btn-quiz-question-option');
	quizQuestionButtonElement.classList.add('heading-s');
	quizQuestionButtonElement.dataset.quizOption = option;

	quizQuestionBtnIcon.classList.add('quiz-button-icon-container');
	quizQuestionBtnIcon.classList.add('quiz-button-option-icon');
	quizQuestionBtnIcon.classList.add('icon-bg-white');

	quizQuestionBtnIcon.innerText = letter;

	quizQuestionBtnLabel.classList.add('quiz-button-option-label');

	quizQuestionBtnLabel.innerText = option;

	quizQuestionButtonElement.appendChild(quizQuestionBtnIcon);
	quizQuestionButtonElement.appendChild(quizQuestionBtnLabel);

	quizQuestionButtonElement.appendChild(quizQuestionBtnIcon);
	quizQuestionButtonElement.appendChild(quizQuestionBtnLabel);

	quizQuestionElement.appendChild(quizQuestionButtonElement);

	return quizQuestionElement;
};

const createQuizQuestionsList = (options) => {
	const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
	const quizQuestionsList = document.createElement('ul');

	for (let key in options) {
		const questionLetter = letterArray[key];
		const newQuestion = createQuizQuestionElement(options[key], questionLetter);
		quizQuestionsList.appendChild(newQuestion);
	}

	return quizQuestionsList;
};

const createSubmitButton = (answer) => {
	const submitButton = document.createElement('button');
	submitButton.id = 'quiz-submit-question';
	submitButton.className = 'button btn-question-submit';
	submitButton.textContent = 'Submit answer';
	submitButton.dataset.answer = answer;
	return submitButton;
};
