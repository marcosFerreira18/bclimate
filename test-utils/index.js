import { render } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import dark from '../src/config/themes/dark';
import HooksProvider from '../src/hooks/settings';
const TEST_THEME = dark;

jest.mock("axios", () => ({
   __esModule: true,
   default: {
     interceptors: {
       request: { use: jest.fn(() => {}) },
       response: { use: jest.fn(() => {}) },
     },
   },
 }));


const AllTheProviders = ({ children }) => {
   return (
      <ThemeProvider theme={{ ...TEST_THEME }}>
         <HooksProvider>{children}</HooksProvider>
      </ThemeProvider>
   );
};

const customRender = (ui, options) => {
   return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react-native';
// override render method
export { customRender as render };

