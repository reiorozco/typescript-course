import { Point } from "./src/point";
import { addNumbers } from "./src/addNumbers";
import { License, person } from "./src/basics";
import { combine, User } from "./src/unionTypes";
import { add, addAndHandle, addValues, printResult } from "./src/functions";
import { Department, ITDepartment } from "./src/class";

// // ---- Mosh ----
// const point = new Point(6, 3);
//
// point.draw();
// // getters
// console.log(point.x);
// // setters
// point.x = 11;
// console.log(point.x);
// point.draw();

// ---- Academind ----

// CORE TYPES
// // number, string and boolean
// const number1 = 5;
// const number2 = 2.8;
// const showResult = true;
// const phrase = "Show result: ";
//
// console.log(
//   "The add result is: " + addNumbers(number1, number2, showResult, phrase)
// );

// // object and Array
// person.nickname = "reiorozco";
// console.log(person);
//
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

// // Tuple
// person.role[1] = "Editor";
// person.role.push("Player"); // Push it's an exception
// console.log(person);

// // Enum
// person.license = License.ADMIN;
// console.log(person);

// // Union Types
// const combinedAges = combine(20, 7);
// console.log(combinedAges);
//
// const combinedNames = combine("Rei", "Orozco");
// console.log(combinedNames);

// // Literal Types
// const combinedAges = combine(20, 7, "as-number");
// console.log(combinedAges);
//
// const combinedStringAges = combine("20", "7", "as-number");
// console.log(combinedStringAges);
//
// const combinedNames = combine("Rei", "Orozco", "as-string");
// console.log(combinedNames);
//
// // Type Aliases & Object Types
// const u1: User = { name: "Max", age: 30 }; // this works!
// console.log(u1);
//
// // Function return Types & "void"
// printResult(add(15, 6));
// console.log(addValues(8, 8));
// addAndHandle(9, 9, (result) => console.log(result));

// Classes & Interfaces
const machineLearning = new ITDepartment("D001", "Rei Orozco");
machineLearning.describe();
machineLearning.addEmployee("Rei");
machineLearning.addEmployee("Pablo");
machineLearning.addEmployee("Fabio");
machineLearning.addEmployee("Neri");
machineLearning.listEmployees();
console.log(machineLearning);

const point = new Point(23, 34);
point.draw();
console.log(point.x);
point.x = 15;
console.log(point.x);
console.log(point);
// Static method
console.log(Point.difference(34, 89));
