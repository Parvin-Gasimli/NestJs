import CreateTaskDto from './dto/create-task.dto';
import { Task } from './dto/task.enity';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTaskById(id: string): Promise<Task>;
    createTasks(createTaskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: string): void;
}
