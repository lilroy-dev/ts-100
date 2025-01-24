const mixedArray = [1, 'a', 2, 'b', 3, 'c'];

const filterByType = <T> (arr:T[], type:string):T[] => {
    return arr.filter((item:T) => { return typeof item === type})
}


console.log(filterByType(mixedArray, 'number')); // Output: [1, 2, 3]
console.log(filterByType(mixedArray, 'string')); // Output: ['a', 'b', 'c']

