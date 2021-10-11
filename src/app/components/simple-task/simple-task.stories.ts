import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SimpleTaskComponent } from './simple-task.component';
import { action } from '@storybook/addon-actions';

export default {
  component: SimpleTaskComponent,
  decorators: [
    moduleMetadata({
      declarations: [SimpleTaskComponent],
      imports: [CommonModule],
    }),
  ],
  excludeStories: /.*.Data$/,
  title: 'Simple Task',
} as Meta;

export const actionData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story<SimpleTaskComponent> = (args) => ({
  props: {
    ...args,
    onPinTask: actionData.onPinTask,
    onArchiveTask: actionData.onArchiveTask,
  },
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
