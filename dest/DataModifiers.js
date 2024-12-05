"use strict";
// TS Data Modifiers
// public, protected, private
// public data modifier
/* class Person_DM {
    name:String;

    constructor(name:String){
        this.name = name
    }
}

class Employee_DM extends Person_DM{
    print = () =>{
        console.log(this.name)
    }

    changenme = (name:string) =>{
        this.name = name
    }
}


let empObject = new Employee_DM('melvin')

empObject.print()

empObject.changenme('Anthony')

empObject.print()

empObject.name = "Arul"

empObject.print() */
// producted data modifier - 'class' and 'subclass' only access to change.
/*
class Person_DM {
   protected name:String;

    constructor(name:String){
        this.name = name
    }
}

class Employee_DM extends Person_DM{
    print = () =>{
        console.log(this.name)
    }

    changenme = (name:string) =>{
        this.name = name
    }
}


let empObject = new Employee_DM('melvin')

empObject.print()

empObject.changenme('Anthony')

empObject.print()

//empObject.name = "Arul"

//empObject.print() */
//private - only class can access
/* class Person_DM {
    private name:String;
 
     constructor(name:String){
         this.name = name
     }
 }
 
 class Employee_DM extends Person_DM{
     print = () =>{
         console.log(this.name)
     }
 
     changenme = (name:string) =>{
         this.name = name
     }
 }
 
 
 let empObject = new Employee_DM('melvin')
 
 empObject.print()
 
 //empObject.changenme('Anthony')
 
 //empObject.print()
 
 //empObject.name = "Arul"
 
 //empObject.print() */
// Read only - one time only to assign the value no way to assign second time.
class Person_DM {
    constructor(name) {
        this.name = name;
    }
}
class Employee_DM extends Person_DM {
    constructor() {
        super(...arguments);
        this.print = () => {
            console.log(this.name);
        };
        // changenme = (name:string) =>{
        //     this.name = name
        // }
    }
}
let empObject = new Employee_DM('melvin');
empObject.print();
//empObject.changenme('Anthony')
//empObject.print()
//empObject.name = "Arul"
//empObject.print()
