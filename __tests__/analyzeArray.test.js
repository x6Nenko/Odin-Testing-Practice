const { analyzeArray } = require('../index');

// Test cases
test('analyzes an array with positive integers', () => {
  const numbers = [1, 2, 3, 4, 5];
  const result = analyzeArray(numbers);

  expect(result.average).toBe(3);
  expect(result.min).toBe(1);
  expect(result.max).toBe(5);
  expect(result.length).toBe(5);
});

test('analyzes an array with negative integers', () => {
  const numbers = [-5, -3, -1, 2, 4];
  const result = analyzeArray(numbers);

  expect(result.average).toBe(-0.6);
  expect(result.min).toBe(-5);
  expect(result.max).toBe(4);
  expect(result.length).toBe(5);
});

test('analyzes an empty array', () => {
  const numbers = [];
  const result = analyzeArray(numbers);

  expect(result.average).toBe(null);
  expect(result.min).toBe(null);
  expect(result.max).toBe(null);
  expect(result.length).toBe(0);
});

test('analyzes an array with a single number', () => {
  const numbers = [42];
  const result = analyzeArray(numbers);

  expect(result.average).toBe(42);
  expect(result.min).toBe(42);
  expect(result.max).toBe(42);
  expect(result.length).toBe(1);
});

test('analyzes an array with decimal numbers', () => {
  const numbers = [1.5, 2.75, 3.25, 4.5];
  const result = analyzeArray(numbers);

  expect(result.average).toBe(3);
  expect(result.min).toBe(1.5);
  expect(result.max).toBe(4.5);
  expect(result.length).toBe(4);
});

test('analyzes an array with a mix of positive and negative numbers', () => {
  const numbers = [10, -5, 8, -3, 7];
  const result = analyzeArray(numbers);

  expect(result.average).toBe(3.4);
  expect(result.min).toBe(-5);
  expect(result.max).toBe(10);
  expect(result.length).toBe(5);
});