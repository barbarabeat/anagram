Anagram

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples

    "foefet" is an anagram of "toffee"

    "Buckethead" is an anagram of "DeathCubeK"


* Before Session 🍅:
    - Choose language: JS ✅
    - Create folders and adjust node, readme and package. ✅

    -----
* After Session 🍅:
    - Initially we implement the methods (in the test environment), it will fail and then make the implementation in the function for that test to pass. Walk this way until everything is covered. It's good to plan before putting your "hands on";
    - When finished, take index.js to the website.

    -----
* Domain:
The words is case insensitive. what means, for example a= A;
Cannt be numbers, should be string;
All the letters must be there, however, the result could be something that doesn't exist;
This function, receives 2 arguments and must return true (is anagram) or false.



* Tests:
    - 1. It should return false if the function doesn't receive any word. ✅
    - 2. Verify if it recognizes that the words should be string; ✅
    - 3. Verify if it recognizes that 'a' is equal to "a"; ✅
    - 4. Verify if it recognizes that 'a' is equal to "A"; ✅
    - 5. Verify if it recognizes that 'Ba' is equal to "Ab"; ✅
    - 6. Verify if is true that 'case' is equal to 'esac'; ✅
    - 7. Verify if is false that 'case' is not equal to 'easy';
    - 8. Verify if is true that 'baSe' is equal to 'Seab';
    - 9. Verify if is false that 'baSe' is not equal to 'Saab';


* Session 1 🍅:
Wrote the case and tests, done tests 1 and 2;

* Session 2 🍅:
- Refactor cases;
- Now, done until test 6;
- Created about the numbers.

* Session 3 🍅:
Tests 7 - 9.
