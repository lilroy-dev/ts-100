function flattenArray<T>(arr: (T | T[])[]): T[] {
    return arr.reduce((acc: T[], item) => {
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}
