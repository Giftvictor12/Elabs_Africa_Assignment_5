// slice 

// The slice() method returns a shallow copy of a portion of an array
// into a new array object.

let numbers = [1, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
let newArray = numbers.slice(2, 5);
console.log(newArray);