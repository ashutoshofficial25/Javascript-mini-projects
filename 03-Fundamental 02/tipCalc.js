"use strict";
const tipCalc = (bill) => {
  if (bill >= 50 && bill <= 300) {
    console.log(`tip is ${(bill * 15) / 100}`);
  } else {
    console.log(`tip is ${(bill * 20) / 100}`);
  }
};
tipCalc(100);
const bills = [125, 555, 44];
