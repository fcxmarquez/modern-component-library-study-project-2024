import 'minireset.css';
import type { Preview } from '@storybook/react';
import '@/styles/global.css';
import React from 'react';

const getStyles = ({ __sb }: any) => ({
  display: 'flex',
  flexDirection: __sb?.flexDirection || 'column',
  maxHeight: __sb?.maxHeight || 'auto',
  justifyContent: __sb?.justifyContent || 'flex-start',
  alignContent: __sb?.alignContent || 'flex-start',
  flexWrap: __sb?.flexWrap || 'wrap',
  height: __sb?.height || '100%',
  gap: __sb?.gap || '10px 30px',
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      exclude: ['getStyles'],
    },
  },
  decorators: [
    (Story: React.FC, { parameters }) => (
      <div style={getStyles(parameters)}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
