8. 
/* Primitive - ÅLX Class
File: 8-hbtn_class.js
Implement a class named ALXClass:

Constructor attributes:
size (Number)
location (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
When the class is cast into a Number, it should return the size.
When the class is cast into a String, it should return the location.

const hc = new ALXClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));
*/
class ALXClass {
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }
    toString() {
        return this._location;
    }
    valueOf() {
        return this._size;
    }
}

const hc = new ALXClass(12, "Mezzanine")
console.log(Number(hc));
console.log(String(hc));

export default ALXClass;
