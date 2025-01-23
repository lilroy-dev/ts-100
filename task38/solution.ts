function flatten<T>(params: T[]): T[] {
    let result: T[] = [];

    for (const param of params) {
        if (Array.isArray(param)) {
            result = result.concat(flatten(param));
        } else {
            result.push(param);
        }
    }
    return result;
}

console.log(flatten([[1, 2], [3, 4], [5, 6]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flatten([['a', 'b'], ['c', 'd'], ['e', 'f']])); // Output: ['a', 'b', 'c', 'd', 'e', 'f']
