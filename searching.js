const array=[1,2,3,4,5,6];
//indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
console.log("Using indexOf:");
console.log(array.indexOf(3));
console.log(array.indexOf(7));

const fruits=["apple","banana","orange"];

//includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
console.log("Using includes:");
console.log(fruits.includes("banana"));  //Output: true
console.log(fruits.includes("grape"));   //Output: false
