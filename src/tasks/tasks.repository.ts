/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import CreateTaskDto from './dto/create-task.dto';
import { Task } from './dto/task.enity';
import { TaskStatus } from './task-status.enum';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    async createTask(CreateTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = CreateTaskDto;
        const task = this.create({
            title,
            description,
            status: TaskStatus.OPEN,
        })
        await this.save(task);
        return task;
    }
}