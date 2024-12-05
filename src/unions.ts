// TypeScript - Union Types

/* 
    - More tthan one type - Union Type
        - Union Type  OR  '|'
 */




// Implicit or Tyoe Interface

/* let unionArray = ['one',1,true]

unionArray.push('two')
unionArray.push(2)
unionArray.push(true)


console.log(unionArray) */



// Explicit

let errorCode:(string | number| boolean);

errorCode = "I have face error"

errorCode = 401

let unionArray:(String | number| boolean)[] = []

unionArray.push('two')
unionArray.push(2)
unionArray.push(true)

console.log(unionArray)


