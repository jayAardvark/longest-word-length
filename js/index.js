function longestWordLength(str) {
  let stringArray = str.split(" ");
  let longest = stringArray[0];
  for (let i=0; i<stringArray.length; i++){
    if(longest.length < stringArray[i].length){
      longest = stringArray[i];
    }
  }
  str = longest;
  return str.length;
}

longestWordLength("What is the longest word in this sentence");
