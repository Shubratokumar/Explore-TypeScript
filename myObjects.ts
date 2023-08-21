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
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User{
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true});

export { }