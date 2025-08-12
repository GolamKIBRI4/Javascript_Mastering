const students=[{name:"John", grade:85},{name:"Jane", grade:92},{name:"Jim", grade:78}];

console.log("Ascending Order:");
console.log(students.sort((a,b)=>a.grade-b.grade));
console.log("Descending Order:");
console.log(students.sort((a,b)=>b.grade-a.grade));