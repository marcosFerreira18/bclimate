/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import light from './dark';

declare module 'styled-components' {
   type ThemeType = typeof light;

   export interface DefaultTheme extends ThemeType {}
}
