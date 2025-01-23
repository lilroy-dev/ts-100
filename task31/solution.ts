interface Product {
    id:number,
    name:string,
    price:number,
    category:string,
}


const products31: Product[] = [
    { id: 1, name: 'Laptop', price: 1000, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 50, category: 'Accessories' },
    { id: 3, name: 'Keyboard', price: 100, category: 'Accessories' }
];


const getTotalPrice = (products: Product[]):number => {
    return products.reduce((acc, item) => acc + item.price, 0)
};
console.log(getTotalPrice(products31)); // Output: 1150
