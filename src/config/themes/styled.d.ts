/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import dark from './dark';

declare module 'styled-components' {
   type ThemeType = typeof dark;

   export interface DefaultTheme extends ThemeType {}
}
