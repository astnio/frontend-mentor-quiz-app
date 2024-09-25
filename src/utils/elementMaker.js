export function QuizSection(
	currentQuestionNumber,
	totalQuestions,
	question,
	options,
	answer
) {
	const quizSection = document.createElement('section');
	quizSection.classList.add('auto-inline-margin');

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
	const questionsList = createQuizQuestionsList(
		options,
		question,
		currentQuestionNumber
	);
	const btnSubmit = createSubmitButton(answer);

	questionHeader.appendChild(questionSubheading);
	questionHeader.appendChild(questionBody);
	questionHeader.appendChild(questionProgressBar);

	quizSection.appendChild(questionHeader);

	questionsContainer.appendChild(questionsList);
	questionsContainer.appendChild(btnSubmit);

	quizSection.appendChild(questionsContainer);

	quizSection.dataset.sectionId = currentQuestionNumber;
	quizSection.id = `section-${currentQuestionNumber}`;
	quizSection.style.transform = `translateX(${
		(currentQuestionNumber - 1) * 100
	}%)`;
	return quizSection;
}

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

const createQuizQuestionElement = (option, letter, currentQuestionNumber) => {
	const quizSectionId = `question-${currentQuestionNumber}-option-${letter.toLowerCase()}`;

	const quizQuestionLabelElement = document.createElement('label');
	const quizQuestionRadioElement = document.createElement('input');
	const quizQuestionBtnIcon = document.createElement('span');
	const quizQuestionBtnLabel = document.createElement('span');

	quizQuestionRadioElement.type = 'radio';
	quizQuestionRadioElement.name = 'quiz-option';
	quizQuestionRadioElement.value = option;
	quizQuestionRadioElement.id = quizSectionId;
	quizQuestionRadioElement.classList.add('question-input');

	quizQuestionLabelElement.htmlFor = quizSectionId;
	quizQuestionLabelElement.classList.add(
		'question-container',
		'button',
		'btn-quiz-button',
		'btn-quiz-question-option',
		'heading-s'
	);

	quizQuestionBtnIcon.classList.add(
		'quiz-button-icon-container',
		'quiz-button-option-icon'
	);
	quizQuestionBtnIcon.dataset.bgColor = 'white';
	quizQuestionBtnIcon.innerText = letter;

	quizQuestionBtnLabel.classList.add('quiz-button-option-label');
	quizQuestionBtnLabel.innerText = option;

	quizQuestionLabelElement.appendChild(quizQuestionRadioElement);
	quizQuestionLabelElement.appendChild(quizQuestionBtnIcon);
	quizQuestionLabelElement.appendChild(quizQuestionBtnLabel);

	return quizQuestionLabelElement;
};

const createQuizQuestionsList = (options, question, currentQuestionNumber) => {
	const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
	const fieldset = document.createElement('fieldset');
	const legend = document.createElement('legend');

	fieldset.classList.add('quiz-questions-fieldset');

	legend.textContent = question;
	legend.classList.add('quiz-question-text');
	legend.style.display = 'none';
	fieldset.appendChild(legend);

	for (let key in options) {
		const questionLetter = letterArray[key];
		const newQuestion = createQuizQuestionElement(
			options[key],
			questionLetter,
			currentQuestionNumber
		);
		fieldset.appendChild(newQuestion);
	}

	return fieldset;
};

const createSubmitButton = (answer) => {
	const submitButton = document.createElement('button');
	submitButton.className = 'button btn-question-submit quiz-submit-question';
	submitButton.textContent = 'Submit answer';
	submitButton.dataset.answer = answer;
	return submitButton;
};
