import 'minireset.css';
import type { Preview } from '@storybook/react';
import '@/styles/global.css';
import { CSSProperties } from 'react';
import React from 'react';

const styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'auto',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  height: '100%',
  gap: '10px 30px',
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: React.FC) => (
      <div style={styles}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
