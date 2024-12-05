// TS - Interface - only work with objects

// Interface - set the rules when ever we use the interface we need to fill all necessary 'elements'

interface UserInterface {
    name: string;
    age: number;
}
const user_I: UserInterface = {
    name: 'melvin',
    age: 24
}


// function Interface

interface Function1 {
    (m: number, y: number): number

}

let add_I: Function1 = (p1: number, p2: number) => {
    return p1 + p2
}


// Extending Interface

interface Employee_I extends UserInterface {
    employeeId: number;
}

const employee_1: Employee_I = {
    name: 'melvin',
    age: 24,
    employeeId: 101
}



//type and interface or same
/* 
type StrorNum_I = String | number;

let errorCode_I: StrorNum_I = 'This is error'
errorCode_I = 401

// interface ccannnot work get error only work with object = key and value pairs
interface StrorNum_Interface = String | number;

let errorCode_Interface: StrorNum_I = 'This is error'
errorCode_Interface = 401 */


