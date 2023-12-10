const { calculator } = require('../index');

test('adds two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiplies two numbers', () => {
  expect(calculator.multiply(4, 6)).toBe(24);
});

test('divides two numbers', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test('handles division by zero', () => {
  expect(calculator.divide(10, 0)).toBe('Cannot divide by zero');
});
