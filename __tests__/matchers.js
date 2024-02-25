
const {addTwoNumber, numberData} = require('../src/matchers');

test('two plus two is four', () => {
    const a = 2;
    const b = 2
    expect(addTwoNumber(a, b)).toBe(4);
});


test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(numberData).toEqual({one: 1, two: 2});
  });