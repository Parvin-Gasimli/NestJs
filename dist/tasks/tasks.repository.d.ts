import { Repository } from 'typeorm';
import CreateTaskDto from './dto/create-task.dto';
import { Task } from './dto/task.enity';
export declare class TasksRepository extends Repository<Task> {
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
