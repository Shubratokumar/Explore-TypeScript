// define variables with union 
let score: number | string | boolean = 33;

// score = 8;
// score = "87";
score = true;

// scenario while deal with user and admin using union types
type User ={
    name: string
    id: string
}
type Admin ={
    username: string
    id: string
    isAdmin: boolean
}

let shuvo: User | Admin = {
    name: "shuvo",
    id: "15"
};

shuvo = {
    name: "shuvo1",
    id: "20",
    isAdmin: true
};



export {}