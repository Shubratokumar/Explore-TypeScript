interface User {
    readonly dbId: number;
    email: string,
    userId: number,
    googleId?: string,// optional
    //startTrail: () => string // method that returns string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

// Its totally allowed to define interface with same name
// Reopening of interface
interface User {
    githubToken: string
}
// Extend interface 
interface Admin extends User {
    role: "admin" | "teacher" | "pupil"
}

const shuvo: Admin = {
    dbId: 55,
    role: "admin",
    email: "sk@gmail.com",
    githubToken: "github/token",
    userId: 4444,
    startTrail:  () => {
        return "Trial Started!";
    }, 
    getCoupon: (name: "shuvo100", off : 10 ) => {
        return 77
    },
};
shuvo.userId = 7777;
shuvo.email = "skg@gmail.com";
//shuvo.dbId = 55; //Cannot do so because 'dbId' is a read-only property





export {}