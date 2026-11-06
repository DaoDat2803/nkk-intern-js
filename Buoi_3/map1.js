const students = [
    { id: 1, name: "Dat", score: 8 },
    { id: 2, name: "Nam", score: 6 },
    { id: 3, name: "Minh", score: 9 },
    { id: 4, name: "An", score: 7 }
];

const listName = students.map(student => student.name.toUpperCase());

console.log(listName);
