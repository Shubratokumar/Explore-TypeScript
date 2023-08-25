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

// bellow both the examples are ok.
shuvo = {
    name: "shuvo1",
    id: "20",
};
shuvo = {
    username: "shuvo2",
    id: "21",
    isAdmin: true
};

// while storing id in database
function getDbId(id: string | number) {
    // console.log(`Database ${id}`);
    if(typeof id === "number"){
        console.log(id +=5);
    } else {
        console.log(id.toUpperCase());
    }
}

getDbId(34);
getDbId("shuvo34");




export {}