export class QuizQuestion {
	_question = '';
	_options = {};
	_answer = '';
	_btnSubmit = null;

	constructor(question, options, answer, btnSubmit) {
		this.question = question;
		this.options = options;
		this.answer = answer;
		this.btnSubmit = btnSubmit;
		this.btnSubmit.addEventListener('click', this.checkCorrectAnswer);
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

	get btnSubmit() {
		return this._btnSubmit;
	}

	set btnSubmit(value) {
		this._btnSubmit = value;
	}

	checkCorrectAnswer() {
		console.log('click');
	}
}
