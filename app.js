const history = document.querySelector("#history");
const display = document.querySelector("#display");
var number = document.querySelectorAll(".number");
var operator = document.querySelectorAll(".operator");

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        var output = getOutput();
        if (output !== NaN) {
            output += this.id;
            printOutput(output)
        }
    })
}

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }
        else {
            var output = getOutput();
            var history = getHistory();

            if (output != "" || history != "") {
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }

    });
}

function getHistory() {
    return history.innerText;
}

function printHistory(num) {
    history.innerText = num;
}

function getOutput() {
    return display.innerText;
}


function printOutput(num) {
    display.innerText = num;
}