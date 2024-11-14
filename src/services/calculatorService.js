import { DIGIT_REGEX, SPACE_REGEX, VALID_OPERATIONS_REGEX } from "../constants.js";

function validateOperator(character) {
    if (!VALID_OPERATIONS_REGEX.test(character)) {
        throw new Error(`Unsupported operator: ${character}`);
    }
}

function evaluate(expression) {
    console.log('Service: calculatorService | function: evaluate | payload:', JSON.stringify(expression))

    expression = expression.replace(SPACE_REGEX, '');
    
    const tokens = getTokens(expression);
    
    return processTokens(tokens);
}

function getTokens(expression) {
    const outputTokens = [];
    let currentNumber = [];

    for (let character of expression) {
        if (DIGIT_REGEX.test(character) || character === '.') {

            currentNumber.push(character);
        } else {

            if (currentNumber.length) {
                outputTokens.push(parseFloat(currentNumber.join('')));
                currentNumber = [];
            }
            validateOperator(character);
            outputTokens.push(character);
        }
    }

    if (currentNumber.length) {
        outputTokens.push(parseFloat(currentNumber.join('')));
    }

    return outputTokens;
}

function processTokens(tokens) {
    const valueStack = [];
    let currentOperator = '+';
    let currentValue = 0;

    while (tokens.length > 0) {
        const currentToken = tokens.shift();

        if (typeof currentToken === 'number') {
            currentValue = currentToken;
        } else if (currentToken === '(') {
            currentValue = processTokens(tokens);
        } else if (currentToken === ')') {
            break;
        } else {
            performOperation(valueStack, currentOperator, currentValue);
            currentOperator = currentToken;
            currentValue = 0;
        }
    }

    performOperation(valueStack, currentOperator, currentValue);


    let result = 0;
    for (let val of valueStack) {
        result += val;
    }
    return result;
}

function performOperation(stack, operator, value) {
    switch (operator) {
        case '+':
            stack.push(value);
            break;
        case '-':
            stack.push(-value);
            break;
        case '*':
            stack[stack.length - 1] *= value;
            break;
        case '/':
                if (value === 0) {
                    throw new Error("Division by zero is not allowed");
                }
                stack[stack.length - 1] /= value;
                break;
        default:
            throw new Error(`An error occurred, please try again later.`);
    }
}

export default { evaluate };
