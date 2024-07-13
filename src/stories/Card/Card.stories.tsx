import {
  getListTemplate,
  getTemplate,
  getOptionsArgTypes,
} from '@/helpers/storybook';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/stories/Card/Card';
import { options } from '../constants';
import styles from './Card.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = getTemplate(Card, styles) as any;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListTemplate = getListTemplate(Card, styles) as any;

const meta: Meta<typeof Card> = {
  component: Card,
  args: {
    children: 'Default Card',
  },
  argTypes: {
    color: getOptionsArgTypes(options.colors),
    size: getOptionsArgTypes(options.sizes),
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default = Template.bind({});

export const Clickable: Story = {
  render: Template,
  args: {
    isClickable: true,
  },
};

export const Draggable: Story = {
  render: Template,
  args: {
    isDraggable: true,
  },
};

export const Colors: Story = {
  render: ListTemplate,
  args: {
    items: options.colors.map((color) => ({
      color,
    })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};

export const Sizes: Story = {
  render: ListTemplate,
  args: {
    items: options.sizes.map((size) => ({
      size,
    })),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
};
