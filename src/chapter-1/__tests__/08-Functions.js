const { sum } = require('../08-Functions');

test('sum soma dois números', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
});