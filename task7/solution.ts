function fetchData():Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => resolve(42), 1000);
    });
}
