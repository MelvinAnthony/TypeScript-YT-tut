// TS - Class

// simple class

class UserClass{
    id:number;

    constructor(a:number){
        this.id = a
    }
}

let userObject = new UserClass(10)

console.log(userObject.id)



// interface in class

interface PersonInterfacce{
    id:number,
    name: string
}

interface AddressInterface{
    City:String;
}

    //class implements interface
class Person implements PersonInterfacce,AddressInterface{
    id:number;
    name:string;
    City:string;

    constructor(a:number,b:string,c:string){
        this.id = a
        this.name = b
        this.City = c
    }
    getNmae = () =>{
        return this.name
    }
}

let person1 = new Person(101,"melvin","chennai")

console.log(person1.name,person1.id, person1.City)
console.log(person1.getNmae())


// Extends class. but only one class should extends

class Student extends Person{
    studentId:number = 101;

    print(){
        console.log(`Name is ${this.name} and Id is ${this.studentId}`)
    }
}

let student1 = new Student(101,"melvin",'chennai')

console.log(student1.print())

