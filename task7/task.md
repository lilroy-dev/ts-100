Типизация функции с промисами
Условие: У тебя есть функция, которая возвращает промис, который разрешается числом. Тебе нужно типизировать возвращаемое значение функции.

function fetchData() {
return new Promise((resolve) => {
setTimeout(() => resolve(42), 1000);
});
}
Твоя задача: Типизировать возвращаемое значение этой функции.