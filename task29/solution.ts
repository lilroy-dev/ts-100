interface Square {
    sideLength: number;
}

interface Circle {
    radius: number;
}

type Shape = Square | Circle;

const getArea = (shape: Shape): number => {
    if (isSquare(shape)) {
        // Если это Square, вычисляем площадь квадрата
        return shape.sideLength ** 2;
    } else if (isCircle(shape)) {
        // Если это Circle, вычисляем площадь круга
        return Math.PI * shape.radius ** 2;
    }

    throw new Error("Unknown shape");
};

// Проверка: это Square?
function isSquare(shape: Shape): shape is Square {
    return "sideLength" in shape; // У Square есть свойство sideLength
}

// Проверка: это Circle?
function isCircle(shape: Shape): shape is Circle {
    return "radius" in shape; // У Circle есть свойство radius
}


const circle: Circle = { radius: 5 };
const square: Square = { sideLength: 4 };

console.log(getArea(circle)); // 78.53981633974483 (площадь круга)
console.log(getArea(square)); // 16 (площадь квадрата)
