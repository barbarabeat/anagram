var isAnagram = function(test, original) {
  if(test.length > 0 ) {
    test = test.toLowerCase();
    original = original.toLowerCase();
    if(test.split(original)) {
      return true;
    }
  }
  return false;
};


module.exports = {
  isAnagram,
};
