"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "shubrato",
    email: "shubrato@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "shubrato", isPaid: false, email: "shubrato@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "Vuejs", price: 599 };
}
