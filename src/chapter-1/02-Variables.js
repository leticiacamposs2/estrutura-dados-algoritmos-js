var num = 1;
num = 3;

var price = 1.5;
var myName = "Packt";
var trueValue = true;
var nullVar = null;
var und;

console.log('num:' + num); // 3
console.log('myName:' + myName); // Packt
console.log('trueValue:' + trueValue); // true
console.log('price:' + price); // 1.5
console.log('nullVar:' + nullVar); // null
console.log('und:' + und); // undefined

var myVariable = 'global';
var myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    var myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable); // global
console.log(myFunction()); // local
console.log(myOtherVariable); // global
console.log(myOtherFunction()); // local
console.log(myOtherVariable); // global

