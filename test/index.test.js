const { isAnagram } = require("../src/index");

describe('Anagram tests', () => {
  test("Verify if it returns false if the function doesnt receive any word.", () => {
  
    expect(isAnagram('','')).toBe(false);
  });

  test("Verify if it recognizes that 'a' is equal to 'a'", () => {
  
    expect(isAnagram('a','a')).toBe(true);
  });

  test("Verify if  it recognizes that 'a' is equal to 'A'", () => {
  
    expect(isAnagram('a','A')).toBe(true);
  });

})
