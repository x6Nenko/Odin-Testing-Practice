// capitalize.test.js
const { capitalize } = require('../index');

// Test cases
test('capitalizes the first character of a word', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('does not change an already capitalized word', () => {
    expect(capitalize('World')).toBe('World');
});

test('handles empty string', () => {
    expect(capitalize('')).toBe('');
});

test('handles non-string input', () => {
    expect(capitalize(123)).toBe(123);
    expect(capitalize(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
});

test('handles string with leading spaces', () => {
    expect(capitalize('  test')).toBe('  test');
});

test('handles string with only spaces', () => {
    expect(capitalize('    ')).toBe('    ');
});
