"use strict";
// TypeScript - Type Casting
// Syntax
// as or <>  // react not work '<>'
// unknown string to string
let a = "hello";
//a.length() not work
// using 'as' keyword
console.log(a.length);
// using bracket '<>'
console.log(a.length);
// unknown numer to string
let b = 20;
// not work bcz type only change data not change
//console.log((y as String).length)
// DOM
let input = document.querySelector('input');
let inputValue = input.value;
