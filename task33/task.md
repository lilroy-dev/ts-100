Типы и массивы
Создай тип Task, который включает в себя поля id, title, completed. Затем создай функцию getCompletedTasks, которая принимает массив объектов типа Task и возвращает массив завершенных задач (где completed равно true).

```
const tasks: Task[] = [
    { id: 1, title: 'Learn TypeScript', completed: true },
    { id: 2, title: 'Build a project', completed: false },
    { id: 3, title: 'Write documentation', completed: true }
];

console.log(getCompletedTasks(tasks));
// Output: [{ id: 1, title: 'Learn TypeScript', completed: true }, { id: 3, title: 'Write documentation', completed: true }]


```








