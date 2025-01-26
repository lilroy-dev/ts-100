Дженерики и массивы
Создай функцию groupBy, которая принимает массив объектов и ключ, по которому нужно сгруппировать объекты. Функция должна возвращать объект, где ключи — это значения указанного ключа, а значения — это массивы объектов, соответствующих этим ключам.


```
interface Item42 {
    category: string;
    name: string;
}

const items: Item42[] = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'vegetable', name: 'broccoli' },
    { category: 'fruit', name: 'cherry' }
];

console.log(groupBy(items, 'category'));
// Output:
// {
//   fruit: [
//     { category: 'fruit', name: 'apple' },
//     { category: 'fruit', name: 'banana' },
//     { category: 'fruit', name: 'cherry' }
//   ],
//   vegetable: [
//     { category: 'vegetable', name: 'carrot' },
//     { category: 'vegetable', name: 'broccoli' }
//   ]
// }


```








