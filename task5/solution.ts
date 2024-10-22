interface PrintUserArguments {
    name: string;
    age: number;
    address: {
        city: string;
    };
}

function printUser({ name, age, address }:PrintUserArguments):string {
    return `${name} is ${age} years old and lives in ${address.city}.`;
}
