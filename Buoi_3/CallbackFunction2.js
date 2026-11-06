function calculate(a, b, callback){
     return callback(a, b);
}

const tong = (a, b) => a + b;
const hieu = (a, b) => a - b;
const tich = (a, b) => a * b;
const thuong = (a, b) => a / b;

console.log(calculate(10, 5, tong));
console.log(calculate(10, 5, hieu));
console.log(calculate(10, 5, tich)); 
console.log(calculate(10, 5, thuong));