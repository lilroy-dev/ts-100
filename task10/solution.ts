interface Person12 {
    name: string;
    age: number,
}

interface User12 extends Person12  {
    friends: Person12[]
}


const user12:User12 = {
    name: "Alice",
    age: 30,
    friends: [
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 28 }
    ]
};
