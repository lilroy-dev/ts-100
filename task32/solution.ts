interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
    divide: (a: number, b: number) => number;
}


const calculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};

console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(5, 3)); // Output: 2
console.log(calculator.multiply(4, 3)); // Output: 12
console.log(calculator.divide(10, 2)); // Output: 5

