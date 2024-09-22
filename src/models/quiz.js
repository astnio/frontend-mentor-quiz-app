import { QuizQuestion } from './quizQuestion.js';

export class Quiz {
	_title = '';
	_icon = '';
	_questions = {};

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

	addQuestion(value) {
		const newQuestion = new QuizQuestion(
			value.question,
			value.options,
			value.answer
		);
		this.questions[value.question] = newQuestion;
	}
}
