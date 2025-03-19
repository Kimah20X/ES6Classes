4.
/* Pricing

Import the class Currency from 3-currency.js

Implement a class named Pricing:

Constructor attributes:
amount (Number)
currency (Currency)
Each attribute must be stored in an “underscore” attribute version
 (ex: name is stored in _name)
Implement a getter and setter for each attribute.
Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
Implement a static method named convertPrice.
 It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.
bob@dylan:~$ cat 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());
*/
import Currency from './3-Currency.js';

export default class Pricing {
    constructor(amount, Currency) {
        this._amount = amount;
        this._Currency = Currency;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    get Currency() {
        return this._currency;
    }

    set Currency(value) {
        this._Currency = value;
    }

    displayFullPrice() {
        return this._amount + this._Currency.name + this._Currency.code ;
    }

}
const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p); 
console.log(p.displayFullPrice());