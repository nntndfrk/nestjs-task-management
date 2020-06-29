import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

import type { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {
  }

  @Get('/')
  getAllTasks(): Array<Task> {
    return this.taskService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.taskService.createTask(title, description);
  }
}
