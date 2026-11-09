const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce((accumulator, number) => {
    if(number % 3 === 0) {
        accumulator.push(number);
    }
    return accumulator;
},[]);
console.log(result);