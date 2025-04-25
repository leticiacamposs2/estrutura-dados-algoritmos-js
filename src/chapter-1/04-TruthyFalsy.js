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
