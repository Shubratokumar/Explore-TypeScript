/* const User = {
    name : "shubrato",
    email: "shubrato@gmail.com",
    isActive: true,
}

function createUser ({ name: string, isPaid: boolean}){}

let newUser = {name: "shubrato", isPaid: false, email: "shubrato@gmail.com"};
createUser(newUser);

function createCourse():{ name:string, price: number }{
    return { name:"Vuejs", price:599 };
} */

// type alias
/* type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User{
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true}); */

// readonly keywords use cases, ? after any property of the Type object define the property as optional parameter while accessing or putting new values on it.
type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCardDetails? : number
}

let myUser: User = {
    _id: "768768",
    name: "Mr. S",
    email: "s@s.com",
    isActive: false
};



myUser.email = "s@sk.com";
// myUser._id = "Cannot assign to '_id' because it is a read-only property."

export { }