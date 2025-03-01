import { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    level: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
    },
    className: { control: 'text' },
    fontSize: { control: 'text' },
    color: { control: 'color' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    level: 1,
    children: 'Heading 1',
    fontSize: '2rem',
  },
}

export const Heading2: Story = {
  args: {
    level: 2,
    children: 'Heading 2',
    fontSize: '1.5rem',
    color: 'blue',
  }
}

export const Heading3: Story = {
  args: {
    level: 3,
    children: 'Heading 3',
    fontSize: '1rem',
    color: 'green',
  }
}
