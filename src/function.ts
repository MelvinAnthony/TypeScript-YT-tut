// Function in TS

// Function Types

//let greet: Function;

let greet = ()=>{
    return "Hello";
}


// function with parameters

/* let add = (a:number,b:number) => {
    return `Calculation is: ${a+b} `;
}

console.log(add(1,3)) */


// Function with retyrn type

/* let add = (a:number,b:number): number => {
    return a+b ;
}

console.log(add(1,3)) */


// Function with Union Type params // and optional

/* let add = (a:number,b:number,c?:number): number | string => {
    return `Calculation is: ${a+b+(c ?? 0)} `;
}

console.log(add(1,3)) */

// function with default value

let add = (a: number, b: number = 2, c: number | string = 3): number | string => {
    if (typeof c === 'number') {
        return `Calculation is: ${a + b + c}`;
    } else {
        return `Invalid value for c: ${c}`;
    }
};

console.log(add(1, 3, 4)); // Case where c is a number
console.log(add(1, 3, "hello")); // Case where c is a string


