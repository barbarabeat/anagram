var isAnagram = function(test, original) {
  if(test.length > 0 ) {
    console.log(typeof test);
    if((typeof test === 'string' && typeof original === 'string') && test === original) {
      return true;
    }
  }
  return false;
};


module.exports = {
  isAnagram,
};
