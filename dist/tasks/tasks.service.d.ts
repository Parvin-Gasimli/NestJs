import { TaskRepository } from './tasks.repository';
import { Task } from './dto/task.enity';
import CreateTaskDto from './dto/create-task.dto';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTaskById(id: any): Promise<Task>;
    createTasks(createTaskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: string): Promise<void>;
}
