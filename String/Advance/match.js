//match(): Returns the matches of the regex in an array.
const str = "The quick brown fox";
const regex = /\b\w{5}\b/g;  
const matches = str.match(regex);
console.log(matches);  //Output: [ 'quick', 'brown']