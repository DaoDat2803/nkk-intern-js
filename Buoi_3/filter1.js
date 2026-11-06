const students = [
    { id: 1, name: "Dat", score: 8, age: 22 },
    { id: 2, name: "Nam", score: 6, age: 20 },
    { id: 3, name: "Minh", score: 9, age: 23 },
    { id: 4, name: "An", score: 7, age: 21 },
    { id: 5, name: "Binh", score: 8.5, age: 22 }
];

const result = students.filter(student => {
    return student.score >=7  && student.age < 23;
    
})

console.log(result);
