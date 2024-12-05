// Types of way to handle the Genericcs array, interface, function, class,Generic Constraints

// array parms
        // we pass as 'array' but result was 'comma' seperated
let printArray = <T>(array:T[]) =>{
    console.log(array.join(','))
}

//printArray([1,2,3])
printArray([1,"melvin",3])


// Interface 
    //Type

interface Disctionary<T,U>{
    key:T,
    value:U
}

let dict: Disctionary<string,number> = {key:'one', value:1}

let dict2: Disctionary<number,string> = {key:2, value:'two'}



// function Interface

interface Maths<T>{
    (x:T,y:T):T
}

let add_number:Maths<number> = (x:number,y:number) => {
    return x+y
}

let add_string:Maths<string> = (x:string,y:string) => {
    return x+y
}


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

class Statuscode<T extends object> {
    code: T;

    constructor(code: T) {
        this.code = code;
    }
}

// Creating an instance with an object
let statuscodeObj = new Statuscode({ code: 200, id: 1 });

console.log(statuscodeObj);




