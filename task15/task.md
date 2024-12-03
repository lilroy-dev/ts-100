Типизация функции для извлечения уникальных значений из массива
Условие: У тебя есть функция, которая принимает массив чисел и возвращает новый массив, содержащий только уникальные значения.


Код:

```
function getUniqueValues(arr) {
    return Array.from(new Set(arr));
}

```

Типизировать параметры и возвращаемое значение функции. Если захочешь, можешь также предложить универсальную версию с использованием дженериков.

