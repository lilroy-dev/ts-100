Типизация функции для группировки массива объектов
Условие: У тебя есть функция, которая принимает массив объектов и строку key. Функция должна возвращать объект, где ключи — значения указанного поля из объектов массива, а значения — массивы объектов, сгруппированных по этому ключу.


Код:

```
function groupBy<T>(arr, key) {
    return arr.reduce((acc, obj) => {
        const groupKey = obj[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(obj);
        return acc;
    }, {});
}

```
Твоя задача: Типизировать параметры и возвращаемое значение функции, сделав её универсальной.



