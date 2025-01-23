Пересечение типов (Intersection Types)
Создай тип Person, который включает в себя поля name и age, а также тип Employee, который включает в себя поля employeeId и department. Затем создай тип PersonEmployee, который является пересечением типов Person и Employee. Создай функцию getPersonEmployeeInfo, которая принимает объект типа PersonEmployee и возвращает строку с информацией о сотруднике.

Код:

```
const personEmployee: PersonEmployee = {
    name: 'Alice',
    age: 30,
    employeeId: 123,
    department: 'Engineering'
};

console.log(getPersonEmployeeInfo(personEmployee));
// Output: Name: Alice, Age: 30, Employee ID: 123, Department: Engineering



```








