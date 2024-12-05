"use strict";
// Tuples in Ts - Typed array.
// Array
/*
 let userArray = ['john',30,true]

userArray[0] = 40
console.log(userArray) */
// Tuple - Typed array.
/*
let userTuple:[string,number,boolean] = ['john',30,true]

userTuple[0] = "melvin"
console.log(userTuple)

userTuple.push(4)  // it will add in the tuple any type. so, solve this using readonly
 */
// Readonly
/* let userTuple: readonly [string,number,boolean] = ['john',30,true];

//userTuple.push(4)  // cant able to add new value untill we specify the type in array

 */
// Named Tuple
let userTuple = ['john', 30, true];
// Access the name Tuple
let [userName, age_, isEng] = userTuple;
console.log(userName);
