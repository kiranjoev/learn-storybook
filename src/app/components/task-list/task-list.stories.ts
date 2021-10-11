import { CommonModule } from '@angular/common';
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { SimpleTaskComponent } from '../simple-task/simple-task.component';
import * as SimpleTaskStories from '../simple-task/simple-task.stories';
import { TaskListComponent } from './task-list.component';

export default {
  component: TaskListComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskListComponent, SimpleTaskComponent],
      imports: [CommonModule],
    }),
    componentWrapperDecorator(
      (story) => `<div style="margin:3em">${story}</div>`
    ),
  ],
  title: 'Task List',
} as Meta;

const Template: Story<TaskListComponent> = (args) => ({
  props: {
    ...args,
    onPinTask: SimpleTaskStories.actionData.onPinTask,
    onArchiveTask: SimpleTaskStories.actionData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...SimpleTaskStories.Default.args.task, id: '1', title: 'Test Task 1' },
    { ...SimpleTaskStories.Default.args.task, id: '2', title: 'Test Task 2' },
    { ...SimpleTaskStories.Default.args.task, id: '3', title: 'Test Task 3' },
    { ...SimpleTaskStories.Default.args.task, id: '4', title: 'Test Task 4' },
    { ...SimpleTaskStories.Default.args.task, id: '5', title: 'Test Task 5' },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { ...SimpleTaskStories.Default.args.task, id: '6', title: 'Test Task 6', state: 'TASK_PINNED' },
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  task: [],
  loading: true
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false
};
