const dou = (number) => number * number;
function processNumber(number, callback) {

  const result = callback(number);
  return result;
}

console.log(processNumber(5, dou));