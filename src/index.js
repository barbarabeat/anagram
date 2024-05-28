var isAnagram = function(test, original) {
  if(test.length > 0 ) {
    test = test.toLowerCase().split();
    original = original.toLowerCase().split();
  const forSee  = '';
    if(test.forEach(letter => original.includes(letter))){
       forSee = test.pop();
       console.log(forSee);
    }

  {
      return true;
    }
  }
  return false;
};


module.exports = {
  isAnagram,
};
