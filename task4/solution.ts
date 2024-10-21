// Типизация функции с параметром-коллбэком
// Условие: У тебя есть функция, которая принимает строку и коллбэк-функцию. Коллбэк-функция принимает строку и возвращает число. Тебе нужно типизировать все параметры и возвращаемое значение.

type TypeCallBack4 = (str: string) => number;

function processString(str: string, callback: TypeCallBack4): number {
    return callback(str);
}


function processString2<T>(str: string, callback: (str: string) => T): T {
    return callback(str);
}
