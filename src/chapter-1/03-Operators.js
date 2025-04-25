var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('num == 1: ' + (num == 1)); // false
console.log('num === 1: ' + (num === 1)); // false
console.log('num != 1: ' + (num != 1)); // true
console.log('num > 1: ' + (num > 1)); // false
console.log('num < 1: ' + (num < 1)); // false
console.log('num >= 1: ' + (num >= 1)); // false
console.log('num <= 1: ' + (num <= 1)); // true
console.log('true && false: ' + (true && false)); // false
console.log('true || false: ' + (true || false)); // true
console.log('!true: ' + (!true)); // false

console.log('5 & 1: ' + (5 & 1)); // 1
console.log('5 | 1: ' + (5 | 1)); // 5
console.log('~ 5: ' + (~5)); // -6
console.log('5 ^ 1: ' + (5 ^ 1)); // 4
console.log('5 << 1: ' + (5 << 1)); // 10
console.log('5 >> 1: ' + (5 >> 1)); // 2

console.log('typeof num: ' + (typeof num)); // number
console.log('typeof Packt: ' + (typeof 'Packt')); // string
console.log('typeof true: ' + (typeof true)); // boolean
console.log('typeof [1, 2, 3]: ' + (typeof [1, 2, 3])); // object
console.log('typeof {name:John}: ' + (typeof { name: 'John' })); // object

var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log('myObj'); // {name: 'John'}

