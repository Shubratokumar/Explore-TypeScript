"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase(); not accepted as type number
    return num + 5;
}
addTwo(7); // we can't pass a string here as an argument because type number.
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("shuvo");
function signUpUser(name, email, isPaid) { }
; // basic function without default value
signUpUser("shuvo", "shuvo@gmail.com", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; // arrow function with default value
loginUser("sk", "sk@gmail.com");
