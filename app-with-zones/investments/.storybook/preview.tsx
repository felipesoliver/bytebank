import type { Preview } from '@storybook/nextjs-vite'

import '../styles/globals.css';
import '../styles/storybook-custom.css';
import { BrandBanner } from '../components/BrandBanner';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    (Story) => {
      return (
        <>
          <Story />
        </>
      );
    },
  ],
};

export default preview;