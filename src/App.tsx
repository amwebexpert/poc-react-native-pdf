import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-lottie-splash-screen';
import { ThemeProvider } from 'react-native-paper';
import Home from './screens/home/Home';
import { appDarkTheme, appLightTheme } from './theme/theme';
import { ThemeContext, ThemeContextProvider } from './theme/ThemeContextProvider';

const App = () => {
  const onReady = () => {
    console.log('Calling SplashScreen.hide()');
    SplashScreen.hide();
    console.log('Calling SplashScreen.hide() END.');
  };

  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {({ isThemeDark }) => {
          const theme = isThemeDark ? appDarkTheme : appLightTheme;
          return (
            <ThemeProvider theme={theme}>
              <NavigationContainer theme={theme} onReady={onReady}>
                <Home />
              </NavigationContainer>
            </ThemeProvider>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
};

export default App;
