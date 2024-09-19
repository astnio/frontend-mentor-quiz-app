export class QuizQuestion {
	_question = '';
	_options = {};
	_answer = '';

	constructor(question, options, answer) {
		this._question = question;
		this._options = options;
		this._answer = answer;
	}

	checkCorrectAnswer() {
		//todo: implement this
	}
}
