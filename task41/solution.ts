type Func<T, R> = (arg: T) => R;

const pipe = <T, R1, R2, R3>(
    fn1: Func<T, R1>,
    fn2: Func<R1, R2>,
    fn3: Func<R2, R3>
): Func<T, R3> => {
    return (arg: T): R3 => {
        return fn3(fn2(fn1(arg)));
    };
};

const addOne41 = (x: number): number => x + 1;
const multiplyByTwo41 = (x: number): number => x * 2;
const subtractThree = (x: number): number => x - 3;

const pipeline = pipe(addOne41, multiplyByTwo41, subtractThree);

console.log(pipeline(5)); // Output: 9 (5 + 1 = 6, 6 * 2 = 12, 12 - 3 = 9)
