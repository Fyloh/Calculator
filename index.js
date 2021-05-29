
const calculator = document.querySelector(".calculator");
const calculator_display = document.querySelector('.calculator-display div');
const calculator_btns = document.querySelector(".calculator-btns");

calculator_btns.addEventListener("click", function (e) {

    // Event Delegation
    // code past this if statement will only run if its a cell that was clicked on.
    if (e.target.matches('button')) {
        const btn = e.target;
        const btnContent = btn.textContent;
        const btnAction = btn.dataset.action;

        // If any button was 'depressed', remove its depressed property and 
        // save which button was 'depressed'
        var btns = calculator_btns.getElementsByTagName('button');
        var btn_depressed = null;
        for (item of btns) {
            if (item.classList.contains('is-depressed')) {
                btn_depressed = item;
                item.classList.remove('is-depressed');
                break;
            }
        }

        if (!btnAction) {
            console.log('Number Key!');

            if (calculator_display.textContent.length >= 23) {
                // do nothing
                // we don't want to display past our bounds
            }

            else if (calculator_display.textContent == '0') {
                calculator_display.textContent = btn.textContent;
            }

            else {
                calculator_display.textContent += btn.textContent;
            }
        }

        if (btnAction == 'add' || btnAction == 'subtract' || btnAction == 'multiply' || btnAction == 'divide') {
            console.log('Operator Key!');
            
            btn.classList.add('is-depressed');


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