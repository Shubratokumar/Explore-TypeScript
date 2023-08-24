// simple arrays in ts
const supperHeros: string[] = [];
// const heroPower: number[] = [];
const heroPower: Array<number> = [];

// define a type for arrays
type User = {
    name: string;
    isActive: boolean;
}

// define an array with type
const allUsers: User[] = [];

// define an array of arrays
const MLModels: number[][] = [
    [255,255,255,255],
    []
];


supperHeros.push("Spiderman");
heroPower.push(5);
allUsers.push({name: "Spiderman", isActive: true});

export {}