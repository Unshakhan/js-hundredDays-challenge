var firstNumber = "";
var secondNumber = "";
var operator = "";
var isSecond = false;

// Sab buttons ko pakro
var buttons = document.getElementsByClassName("num");

// Display input box
var display = document.querySelector(".value");

// Har button ke click par event lagao
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var btnValue = this.getAttribute("data-button");

        // Clear all
        if (btnValue === "C" || btnValue === "CE") {
            firstNumber = "";
            secondNumber = "";
            operator = "";
            isSecond = false;
            display.value = "";
        }

        // Equal button
        else if (btnValue === "=") {
            if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
                var num1 = parseFloat(firstNumber);
                var num2 = parseFloat(secondNumber);
                var result = 0;

                if (operator === "+") {
                    result = num1 + num2;
                } else if (operator === "-") {
                    result = num1 - num2;
                } else if (operator === "*") {
                    result = num1 * num2;
                } else if (operator === "/") {
                    if (num2 === 0) {
                        result = "Error";
                    } else {
                        result = num1 / num2;
                    }
                }

                display.value = result;
                firstNumber = result.toString();
                secondNumber = "";
                operator = "";
                isSecond = false;
            }
        }

        // Operator buttons
        else if (btnValue === "+" || btnValue === "-" || btnValue === "*" || btnValue === "/") {
            if (firstNumber !== "") {
                operator = btnValue;
                isSecond = true;
                display.value = firstNumber + " " + operator + " ";
            }
        }

        // Numbers and dot
        else {
            if (!isSecond) {
                firstNumber += btnValue;
                display.value = firstNumber;
            } else {
                secondNumber += btnValue;
                display.value = firstNumber + " " + operator + " " + secondNumber;
            }
        }
    });
}
