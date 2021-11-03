let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operators");

let equalto = document.querySelector(".equalto");
let clear = document.querySelector(".clear");
let backspace = document.querySelector(".backspace");

let output = document.querySelector(".output");
let display = document.querySelector(".display");

let equaltoPressed = false;

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function () {
		if (equaltoPressed) {
			display.textContent = "";
			equaltoPressed = false;
		}

		if (
			"0123456789.+-×÷".includes(
				display.textContent[display.textContent.length - 1]
			) ||
			display.textContent == ""
		)
			display.textContent += this.textContent;
		evaluate();
	});
}

for (let i = 0; i < operators.length; i++) {
	operators[i].addEventListener("click", function () {
		if (display.textContent !== "." && display.textContent !== "") {
			equaltoPressed = false;
			if ("+-×÷".includes(display.textContent[display.textContent.length - 1]))
				display.textContent =
					display.textContent.substring(0, display.textContent.length - 1) +
					this.textContent;
			else display.textContent += this.textContent;
		}
	});
}

equalto.addEventListener("click", function () {
    if(output.textContent !== "") {
        display.textContent = output.textContent;
        output.textContent = "";
        equaltoPressed = true;
    }
});


clear.addEventListener("click", function(){
  equaltoPressed = false;
  display.textContent = "";
  output.textContent = "";  
});


backspace.addEventListener("click", function() {
    equaltoPressed = false;
    display.textContent = display.textContent.substr(0, display.textContent.length - 1);
    evaluate();
});

function evaluate() {
    let expression = display.textContent;

    for(i = 0; i < expression.length; ++i){
        if(expression[i] === "."){
            expression = 
                expression.substring(0, i) + "*" + 
                    expression.substring(i + 1, expression.length);
        }

        if(expression[i] === "/"){
            expression = 
                expression.substring(0, i) + "/" +
                    expression.substring(i + 1, expression.length); 
        }
    }

    const tempFunc = (exp) => {
        return new Function(`return ${exp}`)();
    };

    if("0123456789.".includes(expression[expression.length - 1]) && tempFunc(expression) != expression
    ) {
        output.textContent = tempFunc(expression);
    } 
    else { 
        output.textContent = "";
    }
}

