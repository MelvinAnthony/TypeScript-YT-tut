// Any Type in TS

// Basic Types
let empName_: any = 'melvin';

console.log(empName_)

empName_ = 24
console.log(empName_)

empName_ = true
console.log(empName_)


// Array
let anyArray:any[] = [];

anyArray.push('melvin')
anyArray.push(24)
anyArray.push(true)

console.log(anyArray)


// Object

type Employee_ = {
    empname: any,
    age: any,
    
}

let employee_:Employee_;

employee_ = {empname: 'Melvin', age:24}
employee_ = {empname: 24, age:'melvin'}

console.log(employee_)


// Null and Undefind

let x: null = null;
let y: undefined = undefined;