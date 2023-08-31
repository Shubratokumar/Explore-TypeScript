"use strict";
// In board category, it's just an array. Kind of arrays that given by typescript with some restrictions on to it.
Object.defineProperty(exports, "__esModule", { value: true });
// Examples
// completely okay. no need to maintain the sequence that is 1st number and 2nd string like that.
var user = [1, "sk"];
var user2 = ["sk", 1];
// tuple example
// it's all about strict sequent of data types in an array.
// knows exactly how many elements it contains, and exactly which types it contains at specific positions.
var user3;
user3 = ["sk", 3, true]; // must maintain the order of the data types in the array.
var rgb = [255, 123, 243];
var newUser = [122, "sk@gmail.com"];
newUser[1] = "sk.com";
