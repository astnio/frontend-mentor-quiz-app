import { QuizQuestion } from './quizQuestion.js';

export class Quiz {
	_title = '';
	_icon = '';
	_questions = {};

	constructor(title, icon, questions) {
		this._title = title;
		this._icon = icon;

		questions.forEach((element) => {
			const newQuestion = new QuizQuestion(
				element.question,
				element.options,
				element.answer
			);
			this._questions[element.question] = newQuestion;
		});
	}
}
