1. 
/*Let's make some classrooms
File: 1-make_classrooms.js
Import the ClassRoom class from 0-classroom.js.

Implement a function named initializeRooms.
It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 
(in this order).
*/

import Classroom from "./0-Classroom.js";

const initializeRooms = () => {
    return  [
      new Classroom(19),
      new Classroom(20), 
      new Classroom(34)
    ]
}
console.log(initializeRooms().join('\n'));

