/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './dto/task.enity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

}