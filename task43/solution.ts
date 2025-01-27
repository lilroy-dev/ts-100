const flattenDeep = <T>(arr: T[] | T[][]): T[] => {
    const result: T[] = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenDeep(item));
        } else {
            result.push(item);
        }
    }
    return result;
};

console.log(flattenDeep([[1, 2], [3, 4], [5, 6]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenDeep([['a', 'b'], ['c', 'd'], ['e', 'f']])); // Output: ['a', 'b', 'c', 'd', 'e', 'f']
console.log(flattenDeep([[1, [2, [3, 4]]], 5, [6, [7, 8]]])); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
