import CreateTaskDto from './dto/create-task.dto';
import { Task } from './dto/task.enity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTaskById(id: string): Promise<Task>;
    createTasks(createTaskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, UpdateTaskDto: UpdateTaskDto): Task;
}
