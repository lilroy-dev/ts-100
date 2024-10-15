// Типизация функции для переворота строки
// Условие: Напиши тип для функции, которая принимает строку и возвращает её в обратном порядке.

function reverseString(str:string):string {
    return str.split('').reverse().join('');
}