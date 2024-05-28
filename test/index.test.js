const { isAnagram } = require("../src/index");

describe('Anagram tests', () => {
  test("Verify if it returns false if the function doesnt receive any word.", () => {
  
    expect(isAnagram('','')).toBe(false);
  });

  test("Verify if if it recognizes that the words should be string", () => {
  
    expect(isAnagram(1,1)).toBe(false);
  });

  test("Verify if it recognizes that 'a' is equal to 'a'", () => {
  
    expect(isAnagram('a','a')).toBe(true);
  });

  test("Verify if it recognizes that 'a' is equal to 'A'", () => {
  
    expect(isAnagram('a','A')).toBe(true);
  });

  test("Verify if it recognizes that 'Ba' is equal to 'Ab'", () => {
  
    expect(isAnagram('Ba','AB')).toBe(true);
  });

  test("Verify if is true that 'case' is equal to 'esac'", () => {
  
    expect(isAnagram('case','esac')).toBe(true);
  }); 

  test("Verify if is false that 'case' is not equal to 'easy'", () => {
  
    expect(isAnagram('case','easy')).toBe(false);
  });   
})
