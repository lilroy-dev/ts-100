Дженерики и функции
Создай функцию compose, которая принимает две функции и возвращает новую функцию, которая является композицией этих двух функций. Композиция функций означает, что результат первой функции передается в качестве аргумента второй функции.


```

const addOne = (x: number): number => x + 1;
const multiplyByTwo = (x: number): number => x * 2;

const addOneThenMultiplyByTwo = compose(addOne, multiplyByTwo);
console.log(addOneThenMultiplyByTwo(3)); // Output: 8 (3 + 1 = 4, 4 * 2 = 8)


```








