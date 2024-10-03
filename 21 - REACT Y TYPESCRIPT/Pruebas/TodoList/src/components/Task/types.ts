export interface ITasksProps<ITask> {
    tasks: ITask[],
    renderTasks: (task: ITask) => React.ReactNode,
};