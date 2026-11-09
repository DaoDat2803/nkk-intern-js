const students = [
    { name: "Dat", score: 8, age: 22 },
    { name: "Nam", score: 6, age: 20 },
    { name: "Minh", score: 9, age: 23 },
    { name: "An", score: 7, age: 21 },
    { name: "Binh", score: 8.5, age: 22 }
];

students.sort((a, b) => a.score - b.score);
console.log(students);

students.sort((a, b) => b.age - a.age);
console.log(students);

students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);