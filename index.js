class Calculator {
    constructor({display, btns}) {
        this.left = null;
        this.right = null;
        this.operator = null;

        this.display = display;
        this.btns = btns;
    }

    handleNumber(btn) {
        // Handle display 
        this.updateDisplay(btn);

        if (this.operator == null) {
            this.left = this.display.textContent;
        }

        else {
            this.right = this.display.textContent;
        }
    }

    handleOperator(btn) {
        // Add 'is-depressed' property to btn to change its css
        btn.classList.add('is-depressed');
        // Save operator to be used for future operation
        this.operator = btn.textContent;
    }

    handleMisc(btn) {
         // Determine which misc button was clicked
        const btnAction = btn.dataset.action;

        if (btnAction == 'decimal') {
            this.display.textContent += '.';
        }

        if (btnAction == 'clear') {
            this.display.textContent = '0';
            this.clearOperatorAndRight();
        }

        if (btnAction == 'calculate') {

            if (this.right != null) {
                this.display.textContent = eval(this.left + this.operator + this.right).toString();
                this.clearOperatorAndRight();
            }
        }

        if (btnAction == 'sign') {
            if (parseFloat(this.display.textContent) > 0) {
                this.display.textContent = "-" + this.display.textContent;
            } 
            else {
                this.display.textContent = this.display.textContent.replace('-', '');
            }
        }

        if (btnAction == 'percent') {
            this.display.textContent = eval(this.display.textContent +  "/ 100").toString();
        }

        this.assignValueToCorrectSide();
    }

    updateDisplay(btn) {
        // Handles case when text exceeds display box boundaries
        if (this.display.textContent.length >= 23) {
            // DO NOTHING
        }
        // Handles case when nothing has been entered in yet
        else if (this.display.textContent == '0') {
            this.display.textContent = btn.textContent;
        }
        // Handles case when typing a number after choosing an operator
        else if (this.operator != null) {
            this.display.textContent = btn.textContent;
        }
        // Handles case when something existed in the display
        else {
            this.display.textContent += btn.textContent;
        }

    }

    clearOperatorAndRight() {
        this.operator = null;
        this.right = null;
    }

    assignValueToCorrectSide() {
        if (this.operator == null) {
            this.left = this.display.textContent;
        }
        else {
            this.right = this.display.textContent;
        }
    }
};

// Create new calculator object to house information
const calculator = new Calculator({
    display: document.querySelector('.calculator-display div'),
    btns: document.querySelector(".calculator-btns")
});

calculator.btns.addEventListener("click", function (e) {

    if (e.target.matches('button')) {
        const btn = e.target;

        // If any button was 'depressed', remove its depressed property
        var btns = calculator.btns.getElementsByTagName('button');
        for (item of btns) {
            item.classList.remove('is-depressed');
        }

        // Number button clicked
        if (btn.classList.contains('btn-number')) {
            console.log('Number Key!');
            calculator.handleNumber(btn);
        }

        // Operator button clicked
        if (btn.classList.contains('btn-operator')) {
            console.log('Operator Key!');
            calculator.handleOperator(btn);
        }

        // Misc button clicked
        if (btn.classList.contains('btn-misc')) {
            console.log('Misc Key!');
            calculator.handleMisc(btn);
        }

    }
});