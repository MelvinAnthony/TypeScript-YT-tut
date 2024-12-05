"use strict";
// TS - Generics
// Reusable Code
// It is access only number type
/* const toArray = (x:number,y:number,z:number) =>{
    return [x,y,z]
}

let arr = toArray(1,2,4)

console.log(arr) */
// here we access any type - here problem is it accecpt any type
/* const toArray = (x:any,y:any,z:any) =>{
    return [x,y,z]
}

let arr = toArray('me','lv',4)

console.log(arr) */
// Using Generic - 'T' is not a default value. use any value but in uppercace 
const toArrayGeneric = (x, y, z) => {
    return [x, y, z];
};
let genericArrayString = toArrayGeneric('a', 'b', 'c');
console.log(genericArrayString);
let genericArrayNumber = toArrayGeneric(1, 2, 3);
console.log(genericArrayNumber);
let genericArrayBoolean = toArrayGeneric(true, false, true);
console.log(genericArrayBoolean);
// multiple Types
/* let printValue = <X,Y,Z>(a:X,b:Y,c:Z) =>{
    console.log(`Type of First: ${typeof a} Type of Second: ${typeof b} Type of Third: ${typeof c}`)
}

printValue(1,'melvin',true) */
// mixed Types
let printValue = (a, b, c, d) => {
    console.log(`Type of First: ${typeof a} Type of Second: ${typeof b} Type of Third: ${typeof c} type of fouth value is ${typeof d}`);
};
printValue(1, 'melvin', true, "M.tech");
