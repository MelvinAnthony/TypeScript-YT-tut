// TypeScript - Enums.

// enum - group of constrants

    // number
// to set the value automatically of ebery element
/* enum Direction{
    East = 100,  // starting value. default value 0
    West,
    South,
    North,
}

console.log(Direction)
console.log(Direction.South)

    // set the each element value
enum StatusCode {
    Sucess = 200,
    Unauthorized = 401,
    ServerError = 500
}
 */

    // String

enum Direction {
    East = 'east',  // in string we need to set all the elements value its not auto increament
    West = 'west',
    South = 'south',
    North = 'north',
}

console.log(Direction)
console.log(Direction.South)
