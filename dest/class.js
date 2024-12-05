"use strict";
// TS - Class
// simple class
class UserClass {
    constructor(a) {
        this.id = a;
    }
}
let userObject = new UserClass(10);
console.log(userObject.id);
//class implements interface
class Person {
    constructor(a, b, c) {
        this.getNmae = () => {
            return this.name;
        };
        this.id = a;
        this.name = b;
        this.City = c;
    }
}
let person1 = new Person(101, "melvin", "chennai");
console.log(person1.name, person1.id, person1.City);
console.log(person1.getNmae());
// Extends class. but only one class should extends
class Student extends Person {
    constructor() {
        super(...arguments);
        this.studentId = 101;
    }
    print() {
        console.log(`Name is ${this.name} and Id is ${this.studentId}`);
    }
}
let student1 = new Student(101, "melvin", 'chennai');
console.log(student1.print());
