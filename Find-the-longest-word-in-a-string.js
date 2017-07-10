function findLongestWord(str) {
  var stringArray = str.split(" ");

  var wordLength = stringArray.map(function(word) {
    return word.length;
  });

  var sortedLength = wordLength.sort(function(a,b) {
   return a > b;
  });

  var lastWordLength = sortedLength[sortedLength.length -1];

  return lastWordLength;
}
