import type { Meta, StoryObj } from '@storybook/react';

import { ExampleButton } from './ExampleButton';

const ButtonMeta: Meta<typeof ExampleButton> = {
  title: 'Example/ExampleButton',
  component: ExampleButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    title: 'Button',
    onPress: () => console.log('Button pressed!'),
  },
};

export default ButtonMeta;

type Story = StoryObj<typeof ButtonMeta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    title: 'Primary Button',
    onPress: () => console.log('Primary button pressed!'),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    title: 'Secondary Button',
    onPress: () => console.log('Secondary button pressed!'),
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    title: 'Outline Button',
    onPress: () => console.log('Outline button pressed!'),
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    title: 'Small Button',
    onPress: () => console.log('Small button pressed!'),
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    title: 'Large Button',
    onPress: () => console.log('Large button pressed!'),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    title: 'Disabled Button',
    onPress: () => console.log('Disabled button pressed!'),
  },
};