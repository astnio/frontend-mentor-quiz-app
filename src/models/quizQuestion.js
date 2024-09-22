export class QuizQuestion {
	_question = '';
	_options = {};
	_answer = '';

	constructor(question, options, answer) {
		this.question = question;
		this.options = options;
		this.answer = answer;
	}

	get question() {
		return this._question;
	}

	set question(value) {
		this._question = value;
	}

	get options() {
		return this._options;
	}

	set options(value) {
		this._options = value;
	}

	get answer() {
		return this._answer;
	}

	set answer(value) {
		this._answer = value;
	}

	checkCorrectAnswer() {
		//todo: implement this
	}
}
