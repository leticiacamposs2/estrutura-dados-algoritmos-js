if (require.main === module) {

    function sayHello() {
        console.log("Hello!");
    }

    sayHello(); // Output: Hello!
    function output(text) {
        console.log(text);
    }

    output("Hello, World!"); // Output: Hello, World!
    output("Hello!", "Other text"); // Output: Hello!
}

function sum(num1, num2) {
    return num1 + num2;
}

var result = sum(1, 2);
if (require.main === module) {
    console.log(result); // Output: 3
}

module.exports = { sum };