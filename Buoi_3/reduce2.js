const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce((total, number) => {
    if (number % 2 === 0) return total + number;
    return total;
}, 0)

console.log(result);
