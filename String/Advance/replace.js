let str= "2020/03/25";
let regex = /(\d{4})\/(\d{2})\/(\d{2})/;

console.log(regex.test(str)); // true (checks if the string matches the regex)

let newDate = str.replace(regex, '$2/$3/$1');

console.log("Original Date: ", str);
console.log("New Date: ", newDate);