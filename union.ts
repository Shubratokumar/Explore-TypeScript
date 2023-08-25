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

// union type in function while storing id in database
function getDbId(id: string | number) {
    // console.log(`Database ${id}`);
    if(typeof id === "number"){
        console.log(id +=5);
    } else {
        console.log(id.toUpperCase());
    }
}

/* getDbId(34);
getDbId("shuvo34"); */

//// union type in arrays
const data: number[] = [1,2,3,4];
const data2: string[] = ["1", "2", "3", "4"];
// union while only one type accepted either string or number
const data3: string[] | number[] = [1,2,3,4];
const data4: string[] | number[] = ["1", "2","3", "4"];
// union while all types are accepted
const data5: (string | number | boolean)[] = [1, 2, 3, 4, true, "1", "2", "3", "4"];

//  The main reason behind using typescript how we give types more strict.

// not useful case but it's maybe
/* let pi:3.14 = 3.14;
pi = 3.145; */

// Use cases: while allocating sea
let seatAllotment: "aisle" | "middle" | "window" | "back";

// assignable
seatAllotment = "aisle";
// couldn't assignable at all because of type checking
seatAllotment = "front";
seatAllotment = "crew";




export {}