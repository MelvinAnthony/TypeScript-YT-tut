"use strict";
// TS - Abstract Class
// Abstract Class - incomplete class
class Person_AC {
}
// child class
class Student_AC extends Person_AC {
    constructor(nam) {
        super();
        this.print = () => {
            console.log(this.name);
        };
        this.name = nam;
    }
}
let stuentObj = new Student_AC('melvin');
stuentObj.print();
// js not support interface so runtime get issue
