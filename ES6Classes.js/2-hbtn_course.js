2. 
/* A Course, Getters, and Setters
Implement a class named ALXCourse:

Constructor attributes:
name (String)
length (Number)
students (array of Strings)
Make sure to verify the type of attributes during object creation
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
*/
export default class ALXCourse {
    constructor(name, length, students) {
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        if (typeof length !== 'number') {
            throw new TypeError('Length must be a number');
        }
        if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = newName;
    }

    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof newLength !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = newLength;
    }

    get students() {
        return this._students;
    }

    set students(newStudents) {
        if (!Array.isArray(newStudents) || !newStudents.every(student => typeof student === 'string')) {
            throw new TypeError('Students must be an array of strings');
        }
        this._students = newStudents;
    }
}

const c1 = new ALXCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);
try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new ALXCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}