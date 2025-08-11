const array=[1,2,3,4,5];

//for each
//Executes a provided function once for each array element.
console.log("Using forEach:");
array.forEach(num=>console.log(num*2));//Output: 2 4 6 8 10
const newArray=array.forEach((num)=>(num*2)); 
console.log(newArray);  //undefined ,forEach does not return a new array


//map
// Creates a new array with the results of calling a function on every element in the array.
const mapArray=array.map(num=>num*2); 
console.log("Using map:");
console.log(mapArray);  //Output: 2 4 6 8 10



//filter(): Creates a new array with all elements that pass the test implemented by the provided function.
const filteredArray=array.filter(num=>(num%2===0));
console.log("Using filter:");
console.log(filteredArray);  //Output: 2 4



//reduce(): Applies a function to accumulate a single result from an array. Often used for summing up values.
const sum = array.reduce((total,num)=>(total+num),0);
console.log("Using reduce:");
console.log(sum);  //Output: 15
