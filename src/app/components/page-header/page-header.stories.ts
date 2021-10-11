import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import Button from '../simple-button/simple-button.component';
import PageHeaderComponent from './page-header.component';

export default {
  title: 'Page Header',
  component: PageHeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<PageHeaderComponent> = (args: PageHeaderComponent) => ({
  props: {...args},
});

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
