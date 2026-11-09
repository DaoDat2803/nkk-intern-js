const product = {
    name: "Laptop",
    price: 20000000,
    manufacturer: "Dell"
};
const displayProduct = ({ name, price, manufacturer }) => {
    console.log(name);
    console.log(price);
    console.log(manufacturer);
}
displayProduct(product);