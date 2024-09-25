export class QuizQuestion {
	_question = '';
	_options = {};
	_answer = '';
	_btnSubmit = null;
	_optionElements = {};

	constructor(question, options, answer, btnSubmit, optionElements) {
		this.question = question;
		this.options = options;
		this.answer = answer;
		this.btnSubmit = btnSubmit;
		this.optionElements = optionElements;

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

	get optionElements() {
		return this._optionElements;
	}

	set optionElements(value) {
		this._optionElements = value;
	}

	checkCorrectAnswer = () => {
		for (let element in this.optionElements) {
			const elInput = this.optionElements[element].querySelector('input');
			const elInput2 = this.optionElements[element];
			console.log('elInput');
			console.log(elInput);
			console.log('elInput2');
			console.log(elInput2);
			if (elInput.checked) {
				console.log('Item checked!');
				console.log(this.optionElements[element]);
			} else {
				console.log('No item checked!');
			}
		}
	};
}
