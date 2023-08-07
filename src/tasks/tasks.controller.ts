/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import CreateTaskDto from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './dto/task.enity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    // @Get()
    // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
    //     if (Object.keys(filterDto).length) {
    //         return this.tasksService.getTasksWithFilters(filterDto);
    //     } else {
    //         return this.tasksService.getAllTasks();
    //     }


    // }
    @Get('/:id')
    getTaskById(@Param('id') id: string): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }
    @Post()
    createTasks(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTasks(createTaskDto);
    }

    // @Get('/:id')
    // getTaskById(@Param("id") id: string): Task {
    //     return this.tasksService.getTaskById(id);
    // }
    // @Post()
    // createTasks(@Body() CreateTaskDto: CreateTaskDto): Task {
    //     return this.tasksService.createTasks(CreateTaskDto);
    // }
    @Delete('/:id')
    deleteTask(@Param("id") id: string): void {
        this.tasksService.deleteTask(id);
    }
    @Patch('/:id/status')
    updateTaskStatus(@Param("id") id: string, @Body() UpdateTaskDto: UpdateTaskDto): Task {
        const { status } = UpdateTaskDto;
        return this.tasksService.updateTaskStatus(id, status);
    }
}