Типы и массивы
Создай тип Product, который включает в себя поля id, name, price и category. Затем создай функцию getTotalPrice, которая принимает массив объектов типа Product и возвращает общую стоимость всех продуктов.


Код:

```
const products: Product[] = [
    { id: 1, name: 'Laptop', price: 1000, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 50, category: 'Accessories' },
    { id: 3, name: 'Keyboard', price: 100, category: 'Accessories' }
];

console.log(getTotalPrice(products)); // Output: 1150




```








