import { Injectable } from '@nestjs/common';
import type { Task } from './task.model';
import { TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Array<Task> = [];

  getAllTasks(): Array<Task> {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      title,
      description,
      status: TaskStatus.OPEN,
      id: uuid(),
    };

    this.tasks.push(task);
    return task;
  }
}
