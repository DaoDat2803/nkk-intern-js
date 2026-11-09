const students = ["Dat", "Nam", "Minh"];

const newStudents = ["An", ...students];

function displayStudents(first, ...others) {
    console.log(first);
    console.log(others);
}
displayStudents(...newStudents);