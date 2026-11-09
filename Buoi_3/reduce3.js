const names = ["Dat", "Nam", "Minh"];

const result = names.reduce((accumulator, name) => {
    return accumulator + "-" + name;
})

console.log(result);
