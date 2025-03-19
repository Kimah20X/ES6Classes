6. 
/* Inheritance
Import Building from 5-building.js.

Implement a class named SkyHighBuilding that extends from Building:

Constructor attributes:
sqft (Number) (must be assigned to the parent class Building)
floors (Number)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter for each attribute.
Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.
import SkyHighBuilding from './6-sky_high.js';

*/
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }
  evacuationWarningMessage() {
    return "Evacuate slowly the " + this._floors + " floors";
  }
}

class TestBuilding extends Building {
  evacuationWarningMessage() {
    return "This is a test building evacuation!";
  }
}

try {
    new TestBuilding(200);  
} catch (err) {
    console.log(err);
}


const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());
