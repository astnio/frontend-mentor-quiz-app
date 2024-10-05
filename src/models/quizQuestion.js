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
		noAnswerWarningLabel,
		moveAllSectionsFunction,
		addToScore
	) {
		this.question = question;
		this.options = options;
		this.answer = answer;
		this.btnSubmit = btnSubmit;
		this.optionElements = optionElements;
		this.noAnswerWarningLabel = noAnswerWarningLabel;
		this.moveAllSections = moveAllSectionsFunction;
		this.addToScore = addToScore;

		this.btnSubmit.addEventListener('click', this.handleSubmit.bind(this));
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
			this.checkCorrectAnswer();
		} else {
			this.moveAllSections();
		}
	};

	checkCorrectAnswer = () => {
		const options = Array.from(this.optionElements).filter(
			(node) => node instanceof Element
		);

		const correctButton = this.getCorrectQuestionButton();

		let optionsChecked = 0;

		options.forEach((option) => {
			const optionInput = option.querySelector('input');
			const optionLabel = option;
			if (optionInput.checked) {
				this.noAnswerWarningLabel.style.visibility = 'hidden';
				optionsChecked++;
				if (optionInput.value === this.answer) {
					// CORRECT
					optionLabel.dataset.correct = 'true';
					optionLabel.dataset.userPicked = 'true';
					this.currentQuestionAnswered = true;
					this.disableRadioButtons();
					this.addToScore();
				} else {
					// WRONG
					optionLabel.dataset.correct = 'false';
					optionLabel.dataset.userPicked = 'true';
					this.currentQuestionAnswered = true;
					correctButton.dataset.correct = 'true';
					this.disableRadioButtons();
				}
				this.btnSubmit.innerText = 'Next Question';
			}
		});

		if (optionsChecked <= 0) {
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
				return elements[i];
			}
		}
		return null;
	}

	transitionSection() {}
}
