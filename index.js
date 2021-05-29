
const calculator = document.querySelector(".calculator");
const calculator_display = document.querySelector('.calculator-display');
const calculator_btns = document.querySelector(".calculator-btns");

calculator_btns.addEventListener("click", function (e) {

    // Event Delegation
    // code past this if statement will only run if its a cell that was clicked on.
    if (e.target.matches('button')) {
        const btn = e.target;
        const btnContent = btn.textContent;
        const btnAction = btn.dataset.action;

        // If any button was 'depressed', remove its depressed property
        var btns = calculator_btns.getElementsByTagName('button');
        for (item of btns) {
            item.classList.remove('is-depressed');
        }

        if (!btnAction) {
            console.log('Number Key!');

            if (calculator_display.textContent == '0') {
                calculator_display.textContent = btn.textContent;
            }

            else {
                calculator_display.textContent += btn.textContent;
            }
        }

        if (btnAction == 'add' || btnAction == 'subtract' || btnAction == 'multiply' || btnAction == 'divide') {
            btn.classList.add('is-depressed');
            console.log('Operator Key!');
        }

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

        var value = parseFloat(calculator_display.textContent);
        console.log(value);

    }


    // Grab text content
    const val = e.target.textContent;



});