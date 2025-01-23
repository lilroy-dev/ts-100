
type Person = {
    name: string;
    age: number;
}


type Employee = {
    employeeId: number;
    department: string
}

type PersonEmployee = Person & Employee;


const personEmployee: PersonEmployee = {
    name: 'Alice',
    age: 30,
    employeeId: 123,
    department: 'Engineering'
};

const getPersonEmployeeInfo = (personInfo:PersonEmployee): string => {
    return `Name: ${personInfo.name}, Age: ${personInfo.age}, Employee ID: ${personInfo.employeeId}, Department: ${personInfo.department}`;
};

console.log(getPersonEmployeeInfo(personEmployee));
// Output: Name: Alice, Age: 30, Employee ID: 123, Department: Engineering
