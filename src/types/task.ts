// src/types/task.ts

// TypeScript types for task management and execution

export interface Task {
    id: string;
    title: string;
    description?: string;
    status: 'pending' | 'in-progress' | 'completed';
    createdAt: Date;
    updatedAt?: Date;
}

export interface TaskManager {
    addTask(task: Task): void;
    removeTask(id: string): void;
    updateTask(id: string, updatedTask: Partial<Task>): void;
    getTasks(): Task[];
    getTaskById(id: string): Task | undefined;
}