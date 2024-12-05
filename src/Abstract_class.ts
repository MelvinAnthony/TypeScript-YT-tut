// TS - Abstract Class

// Abstract Class - incomplete class

abstract class Person_AC {
    abstract name:String;

    /* constructor(nam:string){
        this.name = nam;

    } */

    abstract print():void
}



// child class

class Student_AC extends Person_AC{

    name:string;

    constructor(nam:string){
        super()
        this.name = nam;
    }
    

    print = () =>{
        console.log(this.name)

    }
}

let stuentObj = new Student_AC('melvin')
stuentObj.print()




// Abstract vs Interface

interface AddressIn {
    city:String;
}

    // js not support interface so runtime get issue
    