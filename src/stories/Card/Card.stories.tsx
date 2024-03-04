import { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/stories/Card/Card';
import { options } from '../constants';

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Colors = () =>
  options.colors.map((color, index) => (
    <Card key={index} color={color}>
      {color}
    </Card>
  ));

export const Sizes = () =>
  options.sizes.map((size, index) => (
    <Card key={index} size={size}>
      {size}
    </Card>
  ));

export const Clickable: Story = {
  args: {
    isClickable: true,
  },
};

export const Draggable: Story = {
  args: {
    isDraggable: true,
  },
};
