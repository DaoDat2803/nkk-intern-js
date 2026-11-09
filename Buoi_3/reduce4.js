const students = [
    { name: "Dat", score: 8 },
    { name: "Nam", score: 6 },
    { name: "Minh", score: 9 },
    { name: "An", score: 8 },
    { name: "Binh", score: 6 }
];

const result = students.reduce((accumulator, student) => {
    if(accumulator[student.score]) {
       return accumulator[student.score]++; 
    }
    else{
      return  accumulator[student.score] = 1;
    }
    // return accumulator;
},{})

console.log(result);