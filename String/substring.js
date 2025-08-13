let str = "Hello,World!,nice World!";
console.log("Original String: ", str);

//slice
console.log("Using Slice: ", str.slice(0,5));
console.log("Using slice: ", str.slice(6)); //World!
console.log("Using slice: ", str.slice(-6)); //World!

//substring
//substring(start, end): Similar to slice, but doesn't accept negative indices.
console.log("Using substring: ", str.substring(0,5));
console.log("Using substring: ", str.substring(6));

//replace(): Replaces the first occurrence of a substring.
console.log("Using replace: ",str.replace("World","Universe"))//Hello,Universe!

//replaceAll(): Replaces all occurrences of a substring (available in modern browsers).
console.log("Using replaceAll: ",str.replaceAll("World","Universe"));//Hello,Universe!,nice Universe!