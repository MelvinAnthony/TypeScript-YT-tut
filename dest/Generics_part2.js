"use strict";
// Types of way to handle the Genericcs array, interface, function, class,Generic Constraints
// array parms
// we pass as 'array' but result was 'comma' seperated
let printArray = (array) => {
    console.log(array.join(','));
};
//printArray([1,2,3])
printArray([1, "melvin", 3]);
let dict = { key: 'one', value: 1 };
let dict2 = { key: 2, value: 'two' };
let add_number = (x, y) => {
    return x + y;
};
let add_string = (x, y) => {
    return x + y;
};
// class
/* class Statuscode<T> {
    code:T;
    message:String;

    constructor(code:T,str:string){
        this.code = code
        this.message = str
    }
}

let statuscodeObj = new Statuscode(2023,"melvin")
console.log(statuscodeObj) */
// Generic Constraints
// we set the rules of generic only allow object type only
class Statuscode {
    constructor(code) {
        this.code = code;
    }
}
// Creating an instance with an object
let statuscodeObj = new Statuscode({ code: 200, id: 1 });
console.log(statuscodeObj);
