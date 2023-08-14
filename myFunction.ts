function addTwo(num: number){
    // num.toUpperCase(); not accepted as type number
    return num + 5;
}
addTwo(7);// we can't pass a string here as an argument because type number.

function getUpper(val:string){
    return val.toUpperCase();
}
getUpper("shuvo");

function signUpUser(name: string, email: string, isPaid: boolean){}; // basic function without default value

signUpUser("shuvo", "shuvo@gmail.com", true );

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}; // arrow function with default value

loginUser("sk", "sk@gmail.com");

export {}