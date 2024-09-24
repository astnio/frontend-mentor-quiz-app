export function createQuizSection(questionNumber, question, options, answer) {
	const quizSectionElement = document.createElement('section');
	quizSectionElement.classList.add('auto-inline-margin');

	const quizQuestionsList = document.createElement('ul');
	options.forEach((element) => {
		const newQuestion = createQuizQuestionElement(element);
		quizQuestionsList.appendChild(newQuestion);
	});

	quizSectionElement.innerHTML = /* html */ `
    <div class="question-header max-width auto-inline-margin">
        <h3 class="body-s subtitle">
            Question <span>${questionNumber}</span> of 10
        </h3>
        <p class="quiz-question-body">
            ${question}
        </p>
        <div
            id="quiz-progress-bar-container"
            class=""
        >
            <div id="quiz-progress-bar"></div>
        </div>
    </div>

    <div id="quiz-section-questions-container" class="max-width auto-inline-margin">    
        <button
            data-answer=${answer}
            id="quiz-submit-question"
            class="button btn-question-submit"
        >
            Submit answer
        </button>
    </div>
	`;

	const quizSectionQuestionsContainer = quizSectionElement.getElementById(
		'quiz-section-questions-container'
	);
	quizSectionQuestionsContainer.appendChild(quizQuestionsList);

	return quizSectionElement;
}

const createQuizQuestionElement = (option) => {
	const quizQuestionElement = document.createElement('li');

	quizQuestionElement.innerHTML = /* html */ `
        <button
            data-quiz-option=${option}
            class="button btn-quiz-button btn-quiz-question-option heading-s"
        >
            <span
                class="quiz-button-icon-container quiz-button-option-icon icon-bg-white"
            ></span>
            <span>${option}</span>
        </button>
    `;

	return quizQuestionElement;
};
