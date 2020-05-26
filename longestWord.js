function findLongestWordLength(str) {
  // splits array by words with SPACE as a divider
  let myArray = str.split(" ");
  let longestSoFar = "";
  // iterate through all the words in this array and find the longest
  for (let word in myArray) {
    if (myArray[word].length > longestSoFar.length) {
      longestSoFar = myArray[word];
    }
  }
  return longestSoFar.length;
}

findLongestWordLength("This is a string with some loooooooong words");
