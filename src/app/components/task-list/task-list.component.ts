import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.template.html',
})
export class TaskListComponent {
  /** Checks if it is in loading state */
  @Input() loading = false;
  /** Event to change the task to pinned */
  @Output()
  onPinTask = new EventEmitter<Event>();
  /** Event to change the task to archived */
  @Output()
  onArchiveTask = new EventEmitter<Event>();
  tasksInOrder: Task[] = [];

  /** The list of tasks */
  @Input()
  set tasks(inputTasks: Task[]) {
    this.tasksInOrder = [
      ...inputTasks.filter((t) => t.state === 'TASK_PINNED'),
      ...inputTasks.filter((t) => t.state !== 'TASK_PINNED'),
    ];
  }
}
