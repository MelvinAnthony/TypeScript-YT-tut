"use strict";
// TypeScript - Union Types
/*
    - More tthan one type - Union Type
        - Union Type  OR  '|'
 */
// Implicit or Tyoe Interface
/* let unionArray = ['one',1,true]

unionArray.push('two')
unionArray.push(2)
unionArray.push(true)


console.log(unionArray) */
// Explicit
let errorCode;
errorCode = "I have face error";
errorCode = 401;
let unionArray = [];
unionArray.push('two');
unionArray.push(2);
unionArray.push(true);
console.log(unionArray);
