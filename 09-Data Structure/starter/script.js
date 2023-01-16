'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelhivery: function (obj) {
    console.log(obj);
  },
};
// it can use any data typr,return any tyor
//short-cit=rcuiting
console.log(3 || 'Jonas');
const gusest1 = restaurant.numGuest ? restaurant.numGuest : 10;
const guest2 = restaurant.numGuest || 10;

console.log('------AND-------');

/*
//SPREAD, Beacuse on RIGHT side of = operaor
const arr = [1, 2, ...[3, 4]];

//REST because on LEFT side of =

const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);
const [Pizza, , Resotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(Pizza, Resotto, otherFood);
//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);
//with functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5);
add(2, 3, 4, 5, 6, 7);

const x = [23, 5, 7, 66];
add(...x); //spread operator
/*
//Spread Operator

const arr = [1, 3, 5];
const newArr = [1, 4, 3, arr];
const new2Arr = [1, 4, 3, arr[0], arr[1], arr[2]];
const newModernArr = [1, 4, 3, ...arr];
console.log(newArr);
console.log(new2Arr);
console.log(newModernArr);

const newMenu = [...restaurant.mainMenu, 'Fnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 array

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

const str = 'Ashutosh';
const letters = [...str];
console.log(letters);

/*

// Destructuring Objects ////////////////////////////////////////////
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//setting default value === menu if not available
const { menu = [], starterMenu: start = [] } = restaurant;
console.log(menu, start);

//mutating variables of objects
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 32 };
({ a, b } = obj);
console.log(a, b);

//nested Objects
const { fri } = openingHours;
console.log(fri);

//Destructuring Arrays//////////////////////////////////////////////
/*const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

// Now Destructuring --
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//Destructuring Restaurent
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching values
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//switching variable
[main, secondary] = [secondary, main];

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 1);

//for nested array destructuring

const nested = [2, 3, [4, 5]];

//const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
