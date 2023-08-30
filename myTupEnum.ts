// In board category, it's just an array. Kind of arrays that given by typescript with some restrictions on to it.

// Examples
// completely okay. no need to maintain the sequence that is 1st number and 2nd string like that.
const user: (string | number)[] = [1, "sk"]; 
const user2: (string | number)[] = ["sk", 1];
// tuple example
// it's all about strict sequent of data types in an array.
// knows exactly how many elements it contains, and exactly which types it contains at specific positions.
let user3 : [string, number, boolean]
user3 = ["sk", 3, true]; // must maintain the order of the data types in the array.
let rgb: [number, number, number] = [255, 123, 243];

// tuple with type alias
type User = [number, string]

const newUser: User = [122, "sk@gmail.com"];
newUser[1]= "sk.com";
// newUser.push(true);



export {}