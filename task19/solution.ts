// Напиши функцию, которая принимает массив любого типа и возвращает объект,
// где ключи — это уникальные элементы массива, а значения — их количество в массиве.


function countFrequencies<T extends string | number | symbol>(
    arr: T[]
): Record<T, number> {
    return arr.reduce((acc: Record<T, number>, item: T) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {} as Record<T, number>);
}

