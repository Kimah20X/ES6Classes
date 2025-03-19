7.
/* Airport
File: 7-airport.js
Implement a class named Airport:

Constructor attributes:
name (String)
code (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
The default string description of the class should return the airport code (example below).
const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());

Airport [SFO] { _name: 'San Francisco Airport', _code: 'SFO' }
[object SFO]
*/
class Airport { 
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }
    toString() {
        return "[object " + this._code + "]";
    }
}

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF);
console.log(airportSF.toString());

export default Airport;