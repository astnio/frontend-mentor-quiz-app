import { QuizSection } from '../utils/elementMaker.js';
import { QuizQuestion } from './quizQuestion.js';

export class Quiz {
	_title = '';
	_icon = '';
	_questions = {};
	_quizSections = {};

	constructor(title, icon, questions) {
		this.title = title;
		this.icon = icon;

		let questionCounter = 0;

		for (let element of questions) {
			const newQuestion = new QuizQuestion(
				element.question,
				element.options,
				element.answer
			);
			this.questions[questionCounter] = newQuestion;

			// const newQuestionSectionElement = new QuizSection(
			// 	element.question,
			// 	Object.keys(this.questions).length,
			// 	element.options,
			// 	element.answer
			// );
			// this.questionSectionElements[questionCounter] = newQuestionSectionElement;

			this.createQuizSection(
				questionCounter,
				element.question,
				Object.keys(this.questions).length,
				element.options,
				element.answer
			);

			questionCounter++;
		}
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

	addQuestion(value) {
		const newQuestion = new QuizQuestion(
			value.question,
			value.options,
			value.answer
		);
		this.questions[value.question] = newQuestion;
	}

	createQuizSection(
		id,
		currentQuestion,
		totalQuestions,
		question,
		options,
		answer
	) {
		const quizSection = new QuizSection(
			currentQuestion,
			totalQuestions,
			question,
			options,
			answer
		);

		this._quizSections[id] = quizSection;
		return quizSection;
	}

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
}
