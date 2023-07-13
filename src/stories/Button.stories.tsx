import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './Button.vue';
import { h } from 'vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' },
  },
  args: { primary: false, label: "Click me" }, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  })
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
  render: (args) => h(Button, args),
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
  // @ts-expect-error
  render: (args) => <Button {...args} />,
};

