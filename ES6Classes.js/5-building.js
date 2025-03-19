5. 
/*
A Building
Implement a class named Building:
Constructor attributes:
sqft (Number)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter for each attribute.
Consider this class as an abstract class. 
And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
If a class that extends from it does not have a evacuationWarningMessage method,
throw an error with the message Class extending Building must override evacuationWarningMessage
*/
class building {
    constructor(sqft) {
        if (this.constructor !== building && this.evacuationWarningMessage === undefined) {
            throw new Error('Class extending Building must override evacuationWarningMessage');
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }
}

const b = new building(100);
console.log(b);

class Testbuilding extends building {}

try {
    new Testbuilding(200)
}
catch(err) {
    console.log(err);
}


export default building;