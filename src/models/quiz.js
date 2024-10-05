import { QuizSection } from '../utils/elementMaker.js';
import { QuizQuestion } from './quizQuestion.js';

export class Quiz {
	_title = '';
	_icon = '';
	_questions = {};
	_quizSections = {};
	_quizSectionPositions = {};
	_quizSectionScore = 0;

	constructor(title, icon, questions) {
		this.title = title;
		this.icon = icon;
		this.questions = questions;
		this.moveAllSections = this.moveAllSections.bind(this);
		this.addToScore = this.addToScore.bind(this);

		let questionCounter = 0;

		for (let element of questions) {
			this.createQuizSection(
				questionCounter,
				questionCounter + 1,
				Object.keys(questions).length,
				element.question,
				element.options,
				element.answer
			);

			const newQuestion = new QuizQuestion(
				element.question,
				element.options,
				element.answer,
				this.getQuizSectionSubmitButton(questionCounter),
				this.getQuestionElements(questionCounter),
				this.getNoAnswerWarningLabel(questionCounter),
				this.moveAllSections,
				this.addToScore
			);
			this.questions[questionCounter] = newQuestion;

			questionCounter++;

			this.initMoveSections();
		}
		console.log('Last section:');
		console.log(this.getLastSection());
	}

	get title() {
		return this._title;
	}

	set title(value) {
		this._title = value;
	}

	get icon() {
		return this._icon;
	}

	set icon(value) {
		this._icon = value;
	}

	get questions() {
		return this._questions;
	}

	set questions(value) {
		this._questions = value;
	}

	get quizSections() {
		return this._quizSections;
	}

	set quizSections(value) {
		this._quizSections = value;
	}

	get quizSectionPositions() {
		return this._quizSectionPositions;
	}

	set quizSectionPositions(value) {
		this._quizSectionPositions = value;
	}

	get quizSectionScore() {
		return this._quizSectionScore;
	}

	set quizSectionScore(value) {
		this._quizSectionScore = value;
	}

	getLastSection() {
		const lastKey = Object.keys(this.quizSections).length - 1;
		return this.quizSections[lastKey];
	}

	resetScore() {
		this.quizSectionScore = 0;
	}

	addToScore() {
		this.quizSectionScore++;
	}

	addQuestion(value) {
		const newQuestion = new QuizQuestion(
			value.question,
			value.options,
			value.answer
		);
		this.questions[value.question] = newQuestion;
	}

	createQuizSection = (
		id,
		currentQuestion,
		totalQuestions,
		question,
		options,
		answer
	) => {
		const quizSection = new QuizSection(
			currentQuestion,
			totalQuestions,
			question,
			options,
			answer
		);

		this._quizSections[id] = quizSection;
		return quizSection;
	};

	getQuizSection(id) {
		return this._quizSections[id];
	}

	getAllQuizSections() {
		return Object.values(this._quizSections);
	}

	removeQuizSection(id) {
		if (this._quizSections[id]) {
			delete this._quizSections[id];
			return true;
		}
		return false;
	}

	getQuizSectionSubmitButton(sectionKey) {
		const selectedSection = this.getQuizSection(sectionKey);
		const submitButton = selectedSection.querySelector('.quiz-submit-question');
		return submitButton;
	}

	updateQuizSection(
		id,
		currentQuestion,
		totalQuestions,
		question,
		options,
		answer
	) {
		if (this._quizSections[id]) {
			this._quizSections[id] = createQuizSection(
				currentQuestion,
				totalQuestions,
				question,
				options,
				answer
			);
			return true;
		}
		return false;
	}

	getQuestionElements(sectionKey) {
		const questionElements = this.getQuizSection(sectionKey).querySelectorAll(
			'.btn-quiz-question-option'
		);
		return questionElements;
	}

	getNoAnswerWarningLabel(sectionKey) {
		const noAnswerWarningLabel = this.getQuizSection(sectionKey).querySelector(
			'.no-answer-selected-label-container'
		);
		return noAnswerWarningLabel;
	}

	moveAllSections() {
		Object.entries(this.quizSections).forEach(([index, section]) => {
			const currentPosition = this.quizSectionPositions[index];
			const newPosition = currentPosition - 100;
			this.quizSectionPositions[index] = newPosition;
			section.style.transform = `translateX(${newPosition}%)`;
		});
		console.log(this.quizSectionScore);
	}

	initMoveSections() {
		Object.values(this.quizSections).forEach((section, index) => {
			const newPosition = 100 * index;
			this.quizSectionPositions[index] = newPosition;
			section.style.transform = `translateX(${newPosition}%)`;
		});
	}
}
