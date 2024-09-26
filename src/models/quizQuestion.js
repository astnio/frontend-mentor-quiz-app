export class QuizQuestion {
	_question = '';
	_options = {};
	_answer = '';
	_btnSubmit = null;
	_optionElements = {};
	_noAnswerWarningLabel = null;
	_currentQuestionAnswered = false;

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

		this.btnSubmit.addEventListener('click', this.handleSubmit);
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

	get currentQuestionAnswered() {
		return this._currentQuestionAnswered;
	}

	set currentQuestionAnswered(value) {
		this._currentQuestionAnswered = value;
	}

	handleSubmit = () => {
		if (!this.currentQuestionAnswered) {
			console.log('Current question answered?');
			console.log(this.currentQuestionAnswered);
			this.checkCorrectAnswer();
		} else {
			console.log('other thing now');
		}
	};

	checkCorrectAnswer = () => {
		const elements = Array.from(this.optionElements).filter(
			(node) => node instanceof Element
		);

		const correctButton = this.getCorrectQuestionButton();

		let checkedCount = 0;

		elements.forEach((element) => {
			const elInput = element.querySelector('input');
			const elLabel = element;
			if (elInput.checked) {
				this.noAnswerWarningLabel.style.visibility = 'hidden';
				checkedCount++;
				if (elInput.value === this.answer) {
					// CORRECT
					elLabel.dataset.correct = 'true';
					elLabel.dataset.userPicked = 'true';
					this.currentQuestionAnswered = true;
					this.disableRadioButtons();
				} else {
					// WRONG
					elLabel.dataset.correct = 'false';
					elLabel.dataset.userPicked = 'true';
					this.currentQuestionAnswered = true;
					correctButton.dataset.correct = 'true';
					// console.log(correctButton);
					this.disableRadioButtons();
				}
			}
		});
		if (checkedCount <= 0) {
			this.noAnswerWarningLabel.style.visibility = 'visible';
		}
	};

	disableRadioButtons() {
		const elements = Array.from(this.optionElements).filter(
			(node) => node instanceof Element
		);

		elements.forEach((element) => {
			const elInput = element.querySelector('input');
			elInput.disabled = true;
		});
	}

	getCorrectQuestionButton() {
		const elements = Array.from(this.optionElements).filter(
			(node) => node instanceof Element
		);

		for (let i = 0; i < elements.length; i++) {
			const elInput = elements[i].querySelector('input');
			if (elInput.value === this.answer) {
				console.log('Found matching answer');
				console.log(elements[i]);
				return elements[i];
			}
		}
		return null;
	}
}
