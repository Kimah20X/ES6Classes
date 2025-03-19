0. 
/* You used to attend a place like this at some point

Implement a class named ClassRoom:
Prototype: export default class ClassRoom
It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)
*/


export default class Classroom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  toString() {
    return `ClassRoom { maxStudentsSize: ${this._maxStudentsSize} }`;
  }
}
const room = new Classroom(10);
console.log(room._maxStudentsSize);
