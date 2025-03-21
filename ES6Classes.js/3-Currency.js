3.
/* Methods, static methods, computed methods names..... MONEY

Implement a class named Currency:
- Constructor attributes:
code (String)
name (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
Implement a method named displayFullCurrency that will return the 
attributes in the following format name (code).
*/
class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }
    get code() {
        return this._code;
    }
    get name() { 
        return this._name;
    }
    set code(code) {
        this._code = code;
    }           
    set name(name) {
        this._name = name;
    }

    displayFullCurrency() {
        return  this._name +"(" + this._code + ")";
}
}
const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

export default Currency;