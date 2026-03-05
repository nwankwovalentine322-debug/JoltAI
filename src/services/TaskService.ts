import { Task } from './Task';

class TaskService {
    private tasks: Task[] = [];

    createTask(title: string, description: string): Task {
        const newTask = new Task(title, description);
        this.tasks.push(newTask);
        return newTask;
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    executeTask(taskId: number): boolean {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            task.execute(); // Assuming Task has an execute method
            return true;
        }
        return false;
    }

    // Other management methods can be added here
}

export default TaskService;
