class Calculator {
    constructor() {
        this.left = null;
        this.right = null;
        this.operator = null;
        this.result = null;

        this.display = document.querySelector('.calculator-display div');
        this.btns = document.querySelector(".calculator-btns");
    }

    handleNumber(btn) {
        if (calculator_display.textContent.length >= 23) {
        }
        else if (calculator_display.textContent == '0') {
            calculator_display.textContent = btn.textContent;
        }
        else {
            calculator_display.textContent += btn.textContent;
        }
    }

    handleOperator(btn) {
        btn.classList.add('is-depressed');
    }

    handleMisc(btn) {
         // Determine which misc button was clicked
        const btnAction = btn.dataset.action;

        if (btnAction == 'decimal') {
            console.log('Decimal Key!');
            calculator_display.textContent += '.';
        }

        if (btnAction == 'clear') {
            console.log('Clear Key!');
            calculator_display.textContent = '0';
        }

        if (btnAction == 'calculate') {
            console.log('Equals Key!');
        }

        if (btnAction == 'sign') {
            console.log('Signed Key!');
        }

        if (btnAction == 'percent') {
            console.log('Percent Key!');
        }
    }
};

const calculator = new Calculator();

calculator.btns.addEventListener("click", function (e) {

    // Event Delegation
    // code past this if statement will only run if its a cell that was clicked on.
    if (e.target.matches('button')) {
        const btn = e.target;

        // If any button was 'depressed', remove its depressed property and 
        // save which button was 'depressed'
        var btns = calculator_btns.getElementsByTagName('button');
        for (item of btns) {
            if (item.classList.contains('is-depressed')) {
                calculator.operator = item.textContent;
                item.classList.remove('is-depressed');
                break;
            }
        }


        // Number button clicked
        if (btn.classList.contains('btn-number')) {
            console.log('Number Key!');
            calculator.handleNumber(btn);
        }

        // Operator button clicked
        if (btn.matches('btn-operator')) {
            console.log('Operator Key!');
            calculator.handleOperator(btn);
        }

        // Misc button clicked
        if (btn.matches('btn-misc')) {
            console.log('Misc Key!');
            calculator.handleMisc(btn);
        }

    }
});