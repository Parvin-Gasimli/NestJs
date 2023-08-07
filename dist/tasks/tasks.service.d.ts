import { TasksRepository } from './tasks.repository';
import { Task } from './dto/task.enity';
import { TaskStatus } from './task-status.enum';
export declare class TasksService {
    private tasksRepository;
    constructor(tasksRepository: TasksRepository);
    getTaskById(id: any): Promise<Task>;
    deleteTask(id: string): Promise<void>;
    updateTaskStatus(id: string, status: TaskStatus): Promise<Task>;
}
