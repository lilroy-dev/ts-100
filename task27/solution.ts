interface User1 {
    id:number,
    name:string,
    email?:string,
    age:number
}


const user27: User1 = { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 };

const getUserInfo = (user: User1) => {
    return `User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`;
};
console.log(getUserInfo(user27)); // Output: User ID: 1, Name: John Doe, Email: john@example.com, Age: 30
