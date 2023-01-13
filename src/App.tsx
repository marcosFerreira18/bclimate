import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import dark from './config/themes/dark';
import { HooksProvider } from './hooks';
import Tabs from './navigation/Tabs';

const App: React.FC = () => {
   return (
      <NavigationContainer >
         <StatusBar barStyle={'light-content'} />
         <ThemeProvider theme={{ ...dark }}>
            <HooksProvider>
               <Tabs />
            </HooksProvider>
         </ThemeProvider>
      </NavigationContainer>
   );
};

export default App;
