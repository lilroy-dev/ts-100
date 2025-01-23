
interface Task {
    id:number,
    title:string,
    completed:boolean,
}

const tasks: Task[] = [
    { id: 1, title: 'Learn TypeScript', completed: true },
    { id: 2, title: 'Build a project', completed: false },
    { id: 3, title: 'Write documentation', completed: true }
];

const getCompletedTasks = (tasks: Task[]): Task[] => {
    return tasks.filter(task => task.completed);
};

console.log(getCompletedTasks(tasks));
// Output: [{ id: 1, title: 'Learn TypeScript', completed: true }, { id: 3, title: 'Write documentation', completed: true }]
