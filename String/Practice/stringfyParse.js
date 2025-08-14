// JSON.stringify() and JSON.parse() are two methods in JavaScript that are used to convert data between JSON format and JavaScript objects.
const user = {name: "John", age: 30, city: "New York"};
console.log("Original Object: ", user);

const json=JSON.stringify(user); //convert JavaScript object to JSON string
console.log("JSON String: ",json);

const parsedUser = JSON.parse(json); //convert JSON string back to Javascript object
console.log("Parsed Object: ", parsedUser);