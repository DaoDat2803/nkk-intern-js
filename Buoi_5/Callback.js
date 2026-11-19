function calculate(a,b,callback){
    let result = a + b;
    callback(result);
}

function displayResult(result){
    console.log("Tổng hai số là: " + result);
}

calculate(5, 10, displayResult);