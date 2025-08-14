//Creating Strings
let str1 = "Hello, World!";
let str2 = 'Js is awesome';
let str3 = `Template literals are cool!`;

console.log("String Length: " + str3.length); // Length of the string
console.log("Accessing a Character: ", str2[4]); //Output: s

//concat
//way1
let newString = str1.concat(str2);
console.log("Concatenated String (way1): " , newString); // Concatenating strings

//way2
let newString2=str1+ " "+str2;
console.log("Concatenated String (way2): " , newString2); // Concatenating strings