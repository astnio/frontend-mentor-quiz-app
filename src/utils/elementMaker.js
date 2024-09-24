// export function createQuizSection(
// 	currentQuestion,
// 	totalQuestions,
// 	question,
// 	options,
// 	answer
// ) {
// 	const quizSectionElement = document.createElement('section');
// 	quizSectionElement.classList.add('auto-inline-margin');

// 	const quizQuestionsList = document.createElement('ul');
// 	for (let element of options) {
// 		const newQuestion = createQuizQuestionElement(element);
// 		quizQuestionsList.appendChild(newQuestion);
// 	}

// 	quizSectionElement.innerHTML = /* html */ `
//     <div class="question-header max-width auto-inline-margin">
//         <h3 class="body-s subtitle">
//             Question <span>${currentQuestion}</span> of ${totalQuestions}
//         </h3>
//         <p class="quiz-question-body">
//             ${question}
//         </p>
//         <div
//             id="quiz-progress-bar-container"
//             class=""
//         >
//             <div id="quiz-progress-bar"></div>
//         </div>
//     </div>

//     <div id="quiz-section-questions-container" class="max-width auto-inline-margin">
//         <button
//             data-answer=${answer}
//             id="quiz-submit-question"
//             class="button btn-question-submit"
//         >
//             Submit answer
//         </button>
//     </div>
// 	`;

// 	console.log(typeof quizSectionElement);
// 	console.log(quizSectionElement);

// 	const quizSectionQuestionsContainer = quizSectionElement.getElementById(
// 		'quiz-section-questions-container'
// 	);
// 	quizSectionQuestionsContainer.appendChild(quizQuestionsList);

// 	return quizSectionElement;
// }

// const createQuizQuestionElement = (option) => {
// 	const quizQuestionElement = document.createElement('li');

// 	quizQuestionElement.innerHTML = /* html */ `
//         <button
//             data-quiz-option=${option}
//             class="button btn-quiz-button btn-quiz-question-option heading-s"
//         >
//             <span
//                 class="quiz-button-icon-container quiz-button-option-icon icon-bg-white"
//             ></span>
//             <span>${option}</span>
//         </button>
//     `;

// 	return quizQuestionElement;
// };

export function QuizSection(
	currentQuestion,
	totalQuestions,
	question,
	options,
	answer
) {
	const quizSection = createQuizSection();

	const questionHeader = createQuestionHeader();
	const questionSubheading = createQuestionSubheading(
		currentQuestion,
		totalQuestions
	);
	const questionBody = createQuestionBody(question);
	const questionProgressBar = createQuestionProgressBar();
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

const createQuestionProgressBar = () => {
	const progressBarContainer = document.createElement('div');
	progressBarContainer.id = 'quiz-progress-bar-container';
	const progressBar = document.createElement('div');
	progressBar.id = 'quiz-progress-bar';
	progressBarContainer.appendChild(progressBar);
	return progressBarContainer;
};

const createQuizSectionQuestionsContainer = () => {
	const quizSectionQuestionsContainer = document.createElement('div');
	quizSectionQuestionsContainer.id = 'quiz-section-questions-container';
	quizSectionQuestionsContainer.className = 'max-width auto-inline-margin';
	return quizSectionQuestionsContainer;
};

const createQuizQuestionsList = (options) => {
	const quizQuestionsList = document.createElement('ul');
	for (let element of options) {
		const newQuestion = createQuizQuestionElement(element);
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
	quizSectionQuestionsContainer.appendChild(submitButton);
	return submitButton;
};
