import { Repository } from 'typeorm';
import CreateTaskDto from './dto/create-task.dto';
import { Task } from './dto/task.enity';
export declare class TaskRepository extends Repository<Task> {
    createTask(CreateTaskDto: CreateTaskDto): Promise<Task>;
}
