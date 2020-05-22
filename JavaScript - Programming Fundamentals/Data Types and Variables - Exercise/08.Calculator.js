function calculator(num1, operator, num2) {

    let firstNumber = Number(num1);
    let secondNumber = Number(num2);

    let result = 0;

    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            break;
    }

    console.log(result.toFixed(2));
}