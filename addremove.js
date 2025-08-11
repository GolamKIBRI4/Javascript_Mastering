let arr=["apple","banana","cherry"];
console.log("Initial Array:",arr);

//push
arr.push("orange");
console.log("array after push:",arr);  //array after push [ 'apple', 'banana', 'cherry', 'orange' ]

//pop
arr.pop();
console.log("Array after Pop:", arr); //Array after Pop: [ 'apple', 'banana', 'cherry' ]

//shift
arr.shift();// removes from begining
console.log("Array after shift:", arr);  //Array after shift: [ 'banana', 'cherry' ]

//unshift
arr.unshift("Apple"); //add at the begining
console.log("Array after unshift:", arr);

// spread operator
arr=["Jackfruit",...arr];
console.log("Array after spread operator:",arr);


