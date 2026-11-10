import student from './modules/student.js';
import {calculateAverage} from './modules/calculator.js';

console.log(student.name);
const averageScore = calculateAverage(student.scores);
console.log(averageScore);