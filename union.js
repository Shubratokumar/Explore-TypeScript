"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// define variables with union 
var score = 33;
// score = 8;
// score = "87";
score = true;
var shuvo = {
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
function getDbId(id) {
    // console.log(`Database ${id}`);
    if (typeof id === "number") {
        console.log(id += 5);
    }
    else {
        console.log(id.toUpperCase());
    }
}
/* getDbId(34);
getDbId("shuvo34"); */
//// union type in arrays
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
// union while only one type accepted either string or number
var data3 = [1, 2, 3, 4];
var data4 = ["1", "2", "3", "4"];
// union while all types are accepted
var data5 = [1, 2, 3, 4, true, "1", "2", "3", "4"];
