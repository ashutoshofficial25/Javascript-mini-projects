'use strict';
/*function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
console.log(calcAge(1992));*/
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear), console.log(this);
};
const Jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2022 - this.year);
  },
};
Jonas.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = Jonas.calcAge;
matilda.calcAge();

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age;
console.log('Friend:', friend);
console.log('Me', me);
*/

let lastName = 'Williams',
  oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
};
const marridJessica = jessica;

console.log(jessica);
console.log(marridJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
};
jessicaCopy = Object.assign({}, jessica2);
