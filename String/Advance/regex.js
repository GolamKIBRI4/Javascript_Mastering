let str = "Hello, world!";

//one way
const regex = /World/i; //case insensitive;
console.log("Using test: ",str.search(regex)); 

//test(): Tests if a string matches the regex.
console.log("Using Test",regex.test(str));