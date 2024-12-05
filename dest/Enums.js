"use strict";
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
var Direction;
(function (Direction) {
    Direction["East"] = "east";
    Direction["West"] = "west";
    Direction["South"] = "south";
    Direction["North"] = "north";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.South);
