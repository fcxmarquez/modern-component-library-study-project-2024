import { getTemplate } from '@/helpers/storybook';
import { Meta, StoryObj } from '@storybook/react';
import { Picture } from '@/stories/Picture/Picture';
import styles from './Picture.module.css';

const Template = getTemplate(Picture, styles);
const imgPlaceholder = 'https://picsum.photos/150';

const meta: Meta<typeof Picture> = {
  component: Picture,
  args: {
    src: imgPlaceholder,
    width: '150px',
    height: '150px',
  },
};

export default meta;
type Story = StoryObj<typeof Picture>;

export const Default: Story = {
  render: Template,
};

export const Rounded: Story = {
  render: Template,
  args: {
    isRounded: true,
  },
};
