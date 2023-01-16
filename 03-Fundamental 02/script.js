// "use strict";

// // let hasDriversLicence = false;
// // let passTest = true;

// // if (passTest) {
// //   hasDriversLicence = true;
// // }
// // if (hasDriversLicence) {
// //   console.log("I can drive");
// // }
// // const interface = "Audio";
// // const private = 554;

// // Function //

// function logger() {
//   console.log("My name is Ashutosh!");
// }
// logger(); //invoking/running/calling the function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(4, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(5, 6);
// console.log(appleOrangeJuice);

// //
// function calcAge1(birthYear) {
//   const age = 2039 - birthYear;
//   return age;
// }
// console.log(calcAge1(1991));
// const age1 = calcAge1(1991);
// console.log(age1);

// const clacAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// console.log(clacAge2(1993));

// Arrow Function

// const calcAge = (birthYear) => 2037 - birthYear;

// const age1 = calcAge(2000);
// console.log(age1);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearUntilRetirement(2000, "Ashutosh"));
// console.log(yearUntilRetirement(2001, "Anishu"));
/*
const calcAvg = (num1, num2, num3) => {
  return (avg = (num1 + num2 + num3) / 3);
};

const avgDolphins = calcAvg(44, 23, 71);
const avgKoalas = calcAvg(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Team Dolphins Wins (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Team Dolphins Wins (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`no one wins`);
  }
}
checkWinner(avgDolphins, avgKoalas);
*/

// ARRAYS //
//first way of declaring array
/*
const friends = ["mohan", "jonas", "mubassir", "peter"];
console.log(friends);

console.log(friends[0]); //printing first element of array
console.log(friends[3]);
console.log(friends.length); //this tell number of elements in array
console.log(friends[friends.length - 1]); // to find last element of array

//second way of declaring array
const years = new Array(1991, 1992, 1993, 1994, 1995);

const firstName = "Ashutosh";
const ashutosh = [firstName, "maurya", 2022 - 1999, "Student", friends];
console.log(ashutosh);
console.log(ashutosh.length);

//Exercise

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};
const year = [2000, 2001, 2002];

console.log(calcAge(year[0]));
console.log(calcAge(year[1]));
*/

/*
//ADD ELEMENT
const friends = ["mohan", "jonas", "mubassir", "peter"];
friends.push("krish"); //push function will add this element at the end of the array
const newLength = console.log(friends); //the push is a function so it will return somevalue so this retuen the length of array .
console.log(newLength);

friends.unshift("radha");
console.log(friends);

//REMOVE ELEMENT
friends.pop(); //it remove last element from array. we do not have to pass any values
console.log(friends);
const poppedElement = friends.pop();
console.log(poppedElement); //pop function return deleted element form the array.
console.log(friends);

friends.shift(); //it removes item form begining of the array it also return reomved element

console.log(friends);

("use strict");
const tipCalc = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
*/
/*

//   OBJECTS   //

const ashutosh = {
  firstname: "ashutosh",
  lastname: "maurya",
  age: 22,
  job: "student",
  friends: ["anishu", "divya", "minal"],
};

console.log(ashutosh);
console.log(ashutosh.lastname);
console.log(ashutosh["lastname"]);

const nameKey = "name";

console.log(ashutosh["first" + nameKey]);
console.log(ashutosh["last" + nameKey]);

const interestedIn = prompt(
  "what do yo know about ashutosh? choose between firstname, lastname, age, job, and friends"
);

if (ashutosh[interestedIn]) {
  console.log(ashutosh[interestedIn]);
} else {
  console.log("Wrong request! ");
}

//insrting element in object

ashutosh.location = "India";
ashutosh["state"] = "uttarPradesh";
console.log(ashutosh);
*/

/*
//FUNCTIONS IN OBJECT
const ashutosh = {
  firstname: "ashutosh",
  lastname: "maurya",
  age: 22,
  birthYear: 1999,
  job: "student",
  friends: ["anishu", "divya", "minal"],
  drivingLicence: true,
  calcAge: function () {
    // console.log(this);
    this.age = 2022 - this.birthYear;
    // return 2022 - this.birthYear;
  },
};

console.log(ashutosh);
console.log(ashutosh.age);

// console.log(ashutosh.calcAge(ashutosh.birthYear));
//console.log(ashutosh["calcAge"](2000));

//Challange

console.log(
  `${ashutosh.firstname} is ${ashutosh.age} years old, and he has ${
    ashutosh.drivingLicence ? "a" : "no"
  } driving licnese`
);
*/
//Coading challange
/*
const john = {
  firstName: "John",
  lastName: "Smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
john.calcBMI();
console.log(john);
console.log(john.BMI);

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};
mark.calcBMI();
console.log(mark);
console.log(mark.BMI);
*/
/*
const ashuArray = [
  "ashutosh",
  "Maurya",
  22,
  "student",
  ["ashu", "anishu", "divya"],
];
const types = []; //creating an empty array to fill it dynamically by for loop

console.log(ashuArray[0]);
//continue for printing all
for (let i = 0; i <= ashuArray.length - 1; i++) {
  console.log(ashuArray[i], typeof ashuArray[i]);

  // types[i] = typeof ashuArray[i];
  types.push(typeof ashuArray[i]);
}

console.log(types);

const years = [1990, 1991, 1992, 1999];
const ages = [];

for (let i = 0; i <= years.length - 1; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
*/
//Final coding challange

const bills = [22, 295, 176, 440, 37, 105, 1110, 86, 52];

const tips = [];
const totals = [];

const tipCalc = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i <= bills.length - 1; i++) {
  const tip = tipCalc(bills[i]);
  tips.push(tip);
  totals.push(tipCalc(bills[i]) + tip);

  // tips.push(tipCalc(bills[i]));
  // totals.push(tipCalc(bills[i]) + bills[i]);
}
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i <= length - 1; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([3, 4, 3]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
