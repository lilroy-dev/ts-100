

const obj = { name: 'Alice', age: 30, city: 'Wonderland' };

function getKeyValuePairs<T extends  object>(obje: T):{key: keyof T, value: T[keyof T]}[] {
    const result = [];
    for (const key in obje) {
        result.push({
            "key": key,
            "value": obje[key],
        })
    }

    return result;
}

console.log(getKeyValuePairs(obj));
// Output: [{ key: 'name', value: 'Alice' }, { key: 'age', value: 30 }, { key: 'city', value: 'Wonderland' }]
