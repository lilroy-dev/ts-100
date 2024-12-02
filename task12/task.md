Типизация функции с объединением объектов
Условие: У тебя есть функция, которая принимает два объекта и возвращает новый объект, объединяющий оба.

```
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
```

Твоя задача: Типизировать параметры и возвращаемое значение функции с использованием дженериков.