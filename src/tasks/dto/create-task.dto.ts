/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';

export default class CreateTaskDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
}