// TypeScript Objects


// implicit or type Interface


/* let employee = {
    empName: 'test',
    age:30,
    isPermanent: true
}

employee.empName = "melvin";

employee = {
    empName: 'Melvin',
    age:24,
    isPermanent: true

} */


// Explicit

/* type Employee = {
    empName:String, age:number, isPermanent:boolean
}

let employee: Employee = {
    empName: 'test',
    age:30,
    isPermanent: true
} */


// Optional

type Employee = {
    empName:String, age?:number, isPermanent:boolean   // ? is optional symbool.
}

let employee: Employee = {
    empName: 'test',
    age:30,
    isPermanent: true
}