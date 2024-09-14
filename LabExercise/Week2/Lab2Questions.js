// First Question

const greeter = (myArray, counter) => {
    var greetText = "Hello";
    
    for(const x of myArray){
        console.log(greetText + ' ' + x);
    }
}
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Second Question
const capitalizer = (str) => {
    [first, ...rest] = str;
    return first.toUpperCase() + rest.join('').toLowerCase();
}
console.log(capitalizer('fooBar'))
console.log(capitalizer('nodeJs'))

// Third Question
const colors = ['red', 'green', 'blue']
const capitalizedColors = (colors.map(color => capitalizer(color)));
console.log(capitalizedColors)

// Fourth Question
var values = [1, 60, 34, 30, 20, 5]

const filterLessThanTwenty = values.filter((integer) => integer <20);
console.log(filterLessThanTwenty)

// Fifth Question
var array = [1, 2, 3, 4];
const calculateSum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue=0)
const productSum = array.reduce(
    (accumulator, currentValue) => accumulator * currentValue, initialValue=1)

console.log(calculateSum)
console.log(productSum)

// Sixth Question
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model}, age: ${this.year}.`
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}.`
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details())
const sedan = new Sedan('Volvo sd', 2018, 30000);
console.log(sedan.info())