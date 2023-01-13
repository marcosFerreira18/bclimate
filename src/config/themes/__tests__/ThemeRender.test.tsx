import { render } from "@testing-library/react-native";
import { ThemeProvider } from 'styled-components';

import dark from '../dark';
const TEST_THEME = dark;

export function renderWithTheme(children: React.ReactElement) {
   return render(<ThemeProvider theme={{ ...TEST_THEME }}>{children}</ThemeProvider>);
}
