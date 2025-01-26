interface Item42 {
    [key: string]: any;
}

interface Result42 {
    [key: string]: Item42[];
}

const groupBy1 = <T extends Item42>(items: T[], key: keyof T): Result42 => {
    return items.reduce((acc, item): Result42 => {
        const groupKey = item[key] as string;
        if (!acc[groupKey]) {
            acc[groupKey] = [item];
        } else {
            acc[groupKey].push(item);
        }
        return acc;
    }, {} as Result42);
};

const items: Item42[] = [
    { category: 'fruit', name: 'apple' },
    { category: 'fruit', name: 'banana' },
    { category: 'vegetable', name: 'carrot' },
    { category: 'vegetable', name: 'broccoli' },
    { category: 'fruit', name: 'cherry' }
];

console.log(groupBy1(items, 'category'));
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
