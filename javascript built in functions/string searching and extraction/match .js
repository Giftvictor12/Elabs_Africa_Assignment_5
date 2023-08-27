// regex is all about finding patterns in strings
// .match() will actually return the match 
// against the string you're testing


const csLewisQuote = 'We are what we believe we are.';
const regex1 = /are/;
const regex2 = /eat/;

csLewisQuote.match(regex1); // ["are", index: 3, input: "We are what we believe we are.", groups: undefined]

csLewisQuote.match(regex2); // null