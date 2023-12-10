const { reverseString } = require('../index');

test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('handles empty string', () => {
    expect(reverseString('')).toBe('');
});

test('handles non-string input', () => {
    expect(reverseString(123)).toBe(123);
    expect(reverseString(null)).toBe(null);
    expect(reverseString(undefined)).toBe(undefined);
});

test('handles string with leading spaces', () => {
    expect(reverseString('  test')).toBe('tset  ');
});

test('handles string with only spaces', () => {
    expect(reverseString('    ')).toBe('    ');
});