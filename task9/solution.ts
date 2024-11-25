type arrNums10 = number[];
interface resultNums10 {
    min: number,
    max: number
}


function findMinMax(arr:arrNums10):resultNums10 {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr),
    };
}
