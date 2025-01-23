const identity = <T>(data: T):T => {
    return data;
};
console.log(identity<number>(42)); // Output: 42
console.log(identity<string>('Hello')); // Output: Hello
