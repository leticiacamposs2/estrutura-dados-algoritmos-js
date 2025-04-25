function testTruthy(val) {
    return val ? console.log("truthy") : console.log("falsy");
}

testTruthy(true); // truthy
testTruthy(false); // falsy
testTruthy(new Boolean(false)); // truthy
testTruthy(''); // falsy
testTruthy('Packt'); // truthy
testTruthy(new String('')); // truthy
testTruthy(1); // truthy
testTruthy(-1); // truthy
testTruthy(NaN); // falsy
testTruthy(new Number(NaN)); // truthy
testTruthy({}); // truthy

var obj = { name: 'John' };
testTruthy(obj); // truthy
testTruthy(obj.name); // falsy
testTruthy(obj.age); // falsy

console.log('packt' ? true : false); // true
console.log('packt' == true); // false
console.log('packt' == false); // false
console.log('packt' === true); // false
console.log('packt' === 'packt'); // true

var person1 = { name: 'John' };
var person2 = { name: 'John' };

console.log(person1 == person2); // false