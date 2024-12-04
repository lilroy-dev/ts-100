function groupBy<T, K extends keyof T>(
    arr: T[],
    key: K
): Record<T[K] & string | number | symbol, T[]> {
    return arr.reduce((acc: Record<T[K] & string | number | symbol, T[]>, obj: T) => {
        const groupKey = obj[key] as T[K] & string | number | symbol;
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }
        acc[groupKey].push(obj);
        return acc;
    }, {} as Record<T[K] & string | number | symbol, T[]>);
}
