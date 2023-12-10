const { caesarCipher } = require('../index');

describe('caesarCipher function', () => {
    it('shifts characters correctly with a positive shift', () => {
      expect(caesarCipher('ABC', 3)).toBe('DEF');
    });
  
    it('shifts characters correctly with a negative shift (decrypt)', () => {
      expect(caesarCipher('DEF', -3)).toBe('ABC');
    });
  
    it('wraps from z to a', () => {
      expect(caesarCipher('XYZ', 3)).toBe('ABC');
    });
  
    it('keeps the same case', () => {
      expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
  
    it('handles punctuation', () => {
      expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});