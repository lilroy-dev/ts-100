const mergeObjectso = <T extends object, U extends object> (obj1:T, obj2:U):T & U => {
    return {...obj1, ...obj2};
}

const obj1 = { name: 'Alice', age: 30 };
const obj2 = { age: 31, city: 'Wonderland' };

console.log(mergeObjectso(obj1, obj2));
// Output: { name: 'Alice', age: 31, city: 'Wonderland' }
