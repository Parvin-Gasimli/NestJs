/* eslint-disable prettier/prettier */
import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import CreateTaskDto from './dto/create-task.dto';
import { Task } from './dto/task.enity';
import { TaskStatus } from './task-status.enum';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = createTaskDto;

        const task = this.create({
            title,
            description,
            status: TaskStatus.OPEN,
        });

        await this.save(task);
        return task;
    }

}