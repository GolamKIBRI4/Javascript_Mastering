let str = "Hello, World! JavaScript is fun! in the world!";
console.log("Original String: ", str);

//indexOf()
console.log("Using indexOf: ", str.indexOf("JavaScript")); // 14  
console.log("Using indexOf: ",str.indexOf("Hi")) //-1 (Not Found)

//includes() //checks if a substring exists or not
console.log("Using includes: ",str.includes("fun"))//true
console.log("Using includes: ",str.includes("Hi"))//false

//search(): Similar to indexOf(), but supports regular expressions.
let regex = /fun/; //similar to "fun"
console.log("Using search: ", str.search(regex)); //28  