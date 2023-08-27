// The includes() method checks
//  if an array contains a specified element or not.

let languages = ["JavaScript", "Java", "C", "Python"];

// second argument specifies position to start the search
let check1 = languages.includes("Java", 2);

console.log(check1); // false

// the search starts from third last element 
let check2 = languages.includes("Java", -3);

console.log(check2); // true 