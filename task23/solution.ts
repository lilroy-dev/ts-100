function mergeObjects<T extends object>(...objs: T[]): T {
    return Object.assign({}, ...objs);
}
