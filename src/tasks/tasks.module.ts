/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './dto/task.enity';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';


@Module({
  imports: [TypeOrmModule.forFeature([Task, TasksRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule { }
