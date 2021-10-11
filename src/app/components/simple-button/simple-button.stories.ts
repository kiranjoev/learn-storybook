import { Meta, Story } from '@storybook/angular';
import SimpleButtonComponent from './simple-button.component';

export default {
  title: 'Simple Button',
  component: SimpleButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<SimpleButtonComponent> = (args: SimpleButtonComponent) => ({
  component: SimpleButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
