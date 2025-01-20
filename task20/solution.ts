function replaceElements<T>(arr:T[], target:T, replacement:T):T[] {
    return arr.map((item) => (item === target ? replacement : item));
}
