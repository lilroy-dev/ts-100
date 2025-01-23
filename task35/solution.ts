const getLastElement= <T>(arr:T[]):T | undefined => {
    return arr[arr.length - 1];
};
console.log(getLastElement([1, 2, 3, 4])); // Output: 4
console.log(getLastElement(['a', 'b', 'c'])); // Output: 'c'
console.log(getLastElement([])); // Output: undefined
