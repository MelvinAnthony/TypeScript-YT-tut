"use strict";
// Any Type in TS
// Basic Types
let empName_ = 'melvin';
console.log(empName_);
empName_ = 24;
console.log(empName_);
empName_ = true;
console.log(empName_);
// Array
let anyArray = [];
anyArray.push('melvin');
anyArray.push(24);
anyArray.push(true);
console.log(anyArray);
let employee_;
employee_ = { empname: 'Melvin', age: 24 };
employee_ = { empname: 24, age: 'melvin' };
console.log(employee_);
// Null and Undefind
let x = null;
let y = undefined;
