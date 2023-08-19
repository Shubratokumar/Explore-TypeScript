"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase(); not accepted as type number
    // return "Hello";
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
//// more about function
// explicitly mentioned the type 
/* function getValue (myVal: number): string | boolean {
    if(myVal > 5){
        return true;
    }
    return "200 Ok";
}
getValue(10); */
// basic of arrow functions: return any value even an empty string
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman", "batman"];
// const heros = [2, 3, 5, 6, 7];
heros.map(function (hero) {
    return "my hero is ".concat(hero, ".");
    // return 5;
});
// when we don't want to return anything from a function then explicitly set the type to void. After setting the type to void we can't return anything from the function. This will give us an error.
function consoleError(errmsg) {
    console.error(errmsg);
    // return 5;
}
// using your function robustly use never type instead of void.
function handleError(errmsg) {
    throw new Error(errmsg);
}
