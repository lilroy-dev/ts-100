Объединение типов (Union Types)
Создай тип Shape, который может быть либо кругом (Circle), либо квадратом (Square). Круг должен иметь поле radius, а квадрат — поле sideLength. Затем создай функцию getArea, которая принимает объект типа Shape и возвращает его площадь.


Код:

```

const circle: Circle = { radius: 5 };
const square: Square = { sideLength: 4 };

console.log(getArea(circle)); // Output: 78.54 (примерно)
console.log(getArea(square)); // Output: 16


```








