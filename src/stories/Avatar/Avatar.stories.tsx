import {
  getListTemplate,
  getOptionsArgTypes,
  getTemplate,
} from '@/helpers/storybook';
import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/stories/Avatar/Avatar';
import styles from '@/stories/Picture/Picture.module.css';
import { options } from '../constants';

const Template = getTemplate(Avatar, styles);
const ListTemplate = getListTemplate(Avatar, styles) as any;

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  args: {
    src: 'https://picsum.photos/150',
    size: 'md',
    alt: 'avatar',
  },
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
  },
  parameters: {
    __sb: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: Template,
};

export const Sizes: Story = {
  render: ListTemplate,
  args: {
    items: options.sizes.map((size) => ({
      size,
    })),
  } as any,
};
