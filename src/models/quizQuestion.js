export class QuizQuestion {
	_question = '';
	_options = {};
	_answer = '';
	_btnSubmit = null;
	_optionElements = {};
	_noAnswerWarningLabel = null;

	constructor(
		question,
		options,
		answer,
		btnSubmit,
		optionElements,
		noAnswerWarningLabel
	) {
		this.question = question;
		this.options = options;
		this.answer = answer;
		this.btnSubmit = btnSubmit;
		this.optionElements = optionElements;
		this.noAnswerWarningLabel = noAnswerWarningLabel;

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

	get noAnswerWarningLabel() {
		return this._noAnswerWarningLabel;
	}

	set noAnswerWarningLabel(value) {
		this._noAnswerWarningLabel = value;
	}

	checkCorrectAnswer = () => {
		const elements = Array.from(this.optionElements).filter(
			(node) => node instanceof Element
		);

		elements.forEach((element) => {
			const elInput = element.querySelector('input');
			const elLabel = element;
			console.log('elInput');
			console.log(elInput);
			console.log('elLabel');
			console.log(elLabel);
			if (elInput.checked) {
				console.log('Item checked!');
				console.log(element);
			} else {
				console.log('No item checked!');
			}
		});

		this.noAnswerWarningLabel.style.visibility = 'visible';
	};
}
