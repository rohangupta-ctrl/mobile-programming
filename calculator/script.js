function calculate(operation) {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = eval(num1 + operation + num2);

    document.getElementById("result").innerHTML = "Result: " + result;
}