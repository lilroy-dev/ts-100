Дженерики и функции
Создай функцию pipe, которая принимает несколько функций и возвращает новую функцию, которая последовательно применяет все переданные функции к аргументу.

```
const addOne = (x: number): number => x + 1;
const multiplyByTwo = (x: number): number => x * 2;
const subtractThree = (x: number): number => x - 3;

const pipeline = pipe(addOne, multiplyByTwo, subtractThree);

console.log(pipeline(5)); // Output: 9 (5 + 1 = 6, 6 * 2 = 12, 12 - 3 = 9)


```








