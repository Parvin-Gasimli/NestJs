/* eslint-disable prettier/prettier */
import { NotFoundException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Task } from './dto/task.enity';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {


}