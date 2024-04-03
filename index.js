#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        message: "Enter first number: ",
        type: "number",
        name: "firstNumber"
    },
    { message: "enter second number: ",
        type: "number",
        name: "secondNumber"
    },
    { message: "Select operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"] },
]);
if (answer.operator === "Addition") {
    let sum = answer.firstNumber + answer.secondNumber;
    console.log("Your answer is " + sum);
}
else if (answer.operator === "Subtraction") {
    let difference = answer.firstNumber - answer.secondNumber;
    console.log("Your answer is " + difference);
}
else if (answer.operator === "Multiplication") {
    let product = answer.firstNumber * answer.secondNumber;
    console.log("Your answer is " + product);
}
else if (answer.operator === "Division") {
    let quotient = answer.firstNumber / answer.secondNumber;
    console.log("Your answer is " + quotient);
}
else {
    console.log("Invalid operator!");
}
