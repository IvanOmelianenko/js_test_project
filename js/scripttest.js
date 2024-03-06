"use strict";

// let number = 5;
// const leftBorderWidth = 1;
// number = 10;
// console.log(number);

// const obj = {
//   a: 50,
// };

// obj.a = 10;

// console.log(obj);
// var name = "Ivan";
// console.log(name);

// {
//   var result = 50;
// }
// console.log(result);

// alert(5);
// [].push("a");
// const carBodyWidth = 5000, vehicleBodyLength = 4000;
// console.log("Width of car: " + vehicleBodyWidth + ", length: " + vehicleBodyLength);
// ['fsfdsf', 'dfdsf', 'fdfdfdfd'].map(a => )
// Request
// data
// response
//snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase
// const COLOR_RED = '#F00';
// let number = 4.6;
// console.log(-4 / 0);
// console.log("string" * 9);
// const person = "5";
// const bool = false;
// console.log(something);
// let und;
// console.log(und);

// const obj = {
//   name: "John",
//   age: 25,
//   isMarried: false,
// };
// // console.log(obj.name);
// console.log(obj["name"]);

// let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
// console.log(arr[1]);
// const arr = ["a", "b", "c"];

// arr[10] = "3456";
// console.log(arr);

// const arrObj = {
//   a: "a",
//   1: "b",
//   2: "c",
//   abc: {
//     df: [{}, {}],
//     def: {},
//   },
// };

// const b = "b";

// // arrObj.b = "123";
// arrObj["b"] = [];

// console.log(arrObj["b"]);
// console.log(arrObj.b);
// // const obj = {a: 1, b: 2};
// const obj = {
//   Anna: 500,
//   Alice: 800,
// };
// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Are you 18?", "18");
// console.log(answer + 510);

// const answers = [];
// (answers[0] = prompt("What is your name", "")),
//   (answers[1] = prompt("What is your surname", "")),
//   (answers[2] = prompt("What is your age", ""));
// console.log(typeof answers);
// console.log(typeof null);

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";
// alert(`Hello, ${user}`);

// console.log("arr" + " - object");
// console.log(4 + +"5");

// let incr = 10,
//   decr = 10;

// ++incr;
// --decr;
// console.log(++incr);
// console.log(--decr);

// console.log(5 % 2);

// console.log(2 + 2 * 2 !== "6");

// const isChecked = false,
//   isClose = false;
// console.log(isChecked || !isClose);

//Lesson 21 - Conditions

// if (4 == 9) {
//   console.log("Ok!");
// } else {
//   console.log("Error");
// }

// const num = 50;

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Too much");
// } else {
//   console.log("OK");
// }

// // Ternary operator

// num === 50 ? console.log("OK") : console.log("Error");

// // Switch

// const num = 50;

// switch (num) {
//   case 49:
//     console.log("Wrong");
//     break;
//   case 100:
//     console.log("Wrong");
//     break;
//   case 51:
//     console.log("Ok");
//     break;
//   default:
//     console.log("Not this time");
//     break;
// }

//Lesson 21 - Logical operators

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//   console.log("I'm full");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "fdfdfd");

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log("All full");
// } else {
//   console.log("We're leave");
// }

// AND && - Return first false and last true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries) {
//   console.log("Everyone glad");
// } else {
//   console.log("We're leave");
// }

// console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);
// // OR || - Return first truth last false

// let johnReport, alexReport, sampReport, mariaReport = "Done";

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// console.log(!0);

// console.log(NaN || 2 || undefined); // 2

// console.log(NaN && 2 && undefined); // NaN

// console.log(1 && 2 && 3); // 3

// console.log(25 || null && !3); // 25

// console.log(NaN || null && !3 && undefined || 5); // 5

// console.log(5 === 5 && 3 > 1 || 5); // true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log("Done"); // Done
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log("Done");
// }

// let hamburger
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log("Done");
// }

//Lesson 22 - Loops

// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// //     while (num < 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 2; i < 10; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// let number;

// do {
//   number = +prompt("Enter number more than 100", "");
// } while (number <= 100 && number !== null);

// if (number !== null) {
//   console.log("You entered > 100");
// } else {
//   console.log("You cancel");
// }
// let num;

// do {
//   num = prompt("Введите число больше 100?", 0);
// } while (num <= 100 && num);

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//     if(i % j == 0) continue nextPrime;
// }
// console.log(i);
// }

//Lesson 23 - Loops in loops

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = "";
// const length = 7;

// for(let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level ${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) break first;
//             console.log(`Third level ${k}`);
//         }
//     }
// }

// for (let i = 5; i < 11; i++) {

//     console.log(i);
// }

// // eslint-disable-next-line for-direction
// for (let i = 20; i > 9; i--) {
//     if (i === 13) {
//         break;
//     }
// 	console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 ===0)
//     console.log(i);
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//     console.log(i);
//     }
//     i++;
// }

// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers.push(i);
// }
//     console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//   result[i] = arr[i];
// }

// console.log(result);

// const data = [5, 10, "Shopping", 20, "Homework"];
// for (let i = 0; i < data.length; i++) {
//   if (typeof data[i] === "number") {
//     data[i] *= 2;
//   } else if (typeof data[i] === "string") {
//     data[i] += " - done";
//   }
// }

// console.log(data);

// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];
// for (i = data.length - 1, j = 0; i >= 0; i--, j++) {
//   result[j] = data[i];
// }

// for (let i = 1; i <= data.length; i++) {
//   result[i - 1] = data[data.length - i];
// }

// console.log(result);
// console.log(data.length - 1);

// const lines = 6;
// let result = "";

// for (let i = 0; i < lines; i++) {
//   let spaces = "";
//   let stars = "";

//   for (let j = 0; j < lines - i - 1; j++) {
//     spaces += " ";
//   }

//   for (let k = 0; k < 2 * i + 1; k++) {
//     stars += "*";
//   }

//   result += spaces + stars + "\n";
// }

// console.log(result);

// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*"
//     }
//     result += "\n";
// }

// console.log(result);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// Lesson 25 - Functions

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);


console.log(calc(4, 3));

console.log(calc(5, 6));

console.log(calc(10, 6)); 

function calc(a, b) {
    return (a + b);
}



function ret() {
    let num = 50;
    return num;
}

const anotherNumm = ret();
console.log(anotherNumm);

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => {
    console.log("1");
    return a + b;
}

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
}
function promotion(result) {
    console.log(result * discount);
}

convert(500, usdCurr);
convert(500, eurCurr);


const res = convert(500, usdCurr)
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) return
    }
    console.log("Done");
}

test();

function doNothing() {};
console.log(doNothing() === undefined);

function sayHello(name) {
    return `Hello, ${name}!`;
}

sayHello("Ivan");

function returnNeighboringNumbers(number) {
    return [number - 1, number, number + 1] 
}

console.log(returnNeighboringNumbers(5));

function getMathResult(num1, num2) {
        if (typeof num2 !== 'number' || num2 <= 0) {
            return num1;
        }
        let progression = ""
        for (let i = 0; i < num2; i++) {
        progression+= (num1 * (i + 1));
        if (i !== num2 - 1) {
            progression += "---";
        }
    }
    return progression;
}

console.log(getMathResult(5, 0));

const str = "teSt";
const arr = [1, 2, 4]

// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello world"

console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));