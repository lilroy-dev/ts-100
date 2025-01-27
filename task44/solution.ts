interface Obj44<T> {
    [key: string]: T;
}

const mapObject = <T, R>(obj: Obj44<T>, func: (value: T) => R): Obj44<R> => {
    const newObj: Obj44<R> = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = func(obj[key]);
        }
    }
    return newObj;
};

const obj44 = { a: 1, b: 2, c: 3 };
const double = (x: number): number => x * 2;

console.log(mapObject(obj44, double)); // Output: { a: 2, b: 4, c: 6 }
