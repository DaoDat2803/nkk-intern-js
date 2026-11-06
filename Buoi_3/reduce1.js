const products = [
    { name: "Laptop", price: 20000000 },
    { name: "Mouse", price: 500000 },
    { name: "Keyboard", price: 1000000 },
    { name: "Monitor", price: 5000000 }
];

const result = products.reduce((total, product) =>{
    return total + product.price;
},0)

console.log(result);
