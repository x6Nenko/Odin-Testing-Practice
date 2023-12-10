function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        // Handle cases where the input is not a string or an empty string
        return str;
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
};

function reverseString(str) {
    if (typeof str !== 'string') {
        // Handle cases where the input is not a string
        return str;
    }

    return str.split('').reverse().join('');
};

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : 'Cannot divide by zero'),
};

function caesarCipher(str, shift) {
    // Validate input
    if (typeof str !== 'string' || typeof shift !== 'number') {
        return 'Invalid input';
    }

    // Wrap shift around to handle shifts beyond the alphabet
    shift = shift % 26;

    return str
      .split('')
      .map(char => {
          if (char.match(/[a-z]/i)) {
            // Check if the character is a letter
            const code = char.charCodeAt(0);

            // Shift uppercase letters
            if (char.match(/[A-Z]/)) {
              return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }

            // Shift lowercase letters
            if (char.match(/[a-z]/)) {
              return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
          }

          // Leave non-alphabetic characters unchanged
          return char;
        })
        .join('');
};

function analyzeArray(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return {
            average: null,
            min: null,
            max: null,
            length: 0,
        };
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {
      average,
      min,
      max,
      length: numbers.length,
  };
};

module.exports = { 
    capitalize, 
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};