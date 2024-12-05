"use strict";
// TS - Interface - only work with objects
const user_I = {
    name: 'melvin',
    age: 24
};
let add_I = (p1, p2) => {
    return p1 + p2;
};
const employee_1 = {
    name: 'melvin',
    age: 24,
    employeeId: 101
};
//type and interface or same
/*
type StrorNum_I = String | number;

let errorCode_I: StrorNum_I = 'This is error'
errorCode_I = 401

// interface ccannnot work get error only work with object = key and value pairs
interface StrorNum_Interface = String | number;

let errorCode_Interface: StrorNum_I = 'This is error'
errorCode_Interface = 401 */
