const { isArrayEmpty, findMax, findMin, sumArray, averageArray } = require('../helper');

test('isArrayEmpty retorna true para array vazio', () => {
    expect(isArrayEmpty([])).toBe(true);
});

test('findMax retorna o maior valor', () => {
    expect(findMax([1, 2, 3])).toBe(3);
});

test('findMin retorna o menor valor', () => {
    expect(findMin([1, 2, 3])).toBe(1);
});

test('sumArray soma todos os valores', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
});

test('averageArray retorna a média', () => {
    expect(averageArray([2, 4, 6])).toBe(4);
});