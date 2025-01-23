const addOne = (x: number): number => x + 1;
const multiplyByTwo = (x: number): number => x * 2;

type FuncType = (x: number) => number;

const compose = (first:FuncType, second:FuncType) => {
    return (num:number) => {
       return  second(first(num))
    };
}

const addOneThenMultiplyByTwo = compose(addOne, multiplyByTwo);
console.log(addOneThenMultiplyByTwo(3)); // Output: 8 (3 + 1 = 4, 4 * 2 = 8)
