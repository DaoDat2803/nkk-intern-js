const numbers = [15, 3, 20, 8, 1, 12, 30, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);