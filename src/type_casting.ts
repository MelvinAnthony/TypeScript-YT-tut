// TypeScript - Type Casting

// Syntax

    // as or <>  // react not work '<>'

// unknown string to string

let a: unknown ="hello"

//a.length() not work

    // using 'as' keyword
console.log((a as string).length)

    // using bracket '<>'
console.log((<string>a).length)

// unknown numer to string

let b:unknown = 20

    // not work bcz type only change data not change
//console.log((y as String).length)


// DOM
let input = document.querySelector('input') as HTMLInputElement
let inputValue = input.value


