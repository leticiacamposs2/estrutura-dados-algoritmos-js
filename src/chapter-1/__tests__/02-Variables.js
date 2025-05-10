const { myFunction, myOtherFunction } = require('../02-Variables');

test('myFunction retorna "local"', () => {
    expect(myFunction()).toBe('local');
});

test('myOtherFunction retorna "local"', () => {
    expect(myOtherFunction()).toBe('local');
});