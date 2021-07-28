import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-lottie-splash-screen';
import { Button, Provider as PaperProvider, Text, ThemeProvider } from 'react-native-paper';
import GameProgress from './components/gameprogress/GameProgress';
import { ThemeContext, ThemeContextProvider } from './theme/ThemeContextProvider';
import { appLightTheme, appDarkTheme } from './theme/theme';

const App = () => {
  const { t, i18n } = useTranslation();
  const [previousPercent, setPreviousPercent] = useState<number>(100);
  const [newPercent, setNewPercent] = useState<number>(100);

  useEffect(() => SplashScreen.hide(), []);

  const decreaseProgress = () => {
    setPreviousPercent(newPercent);
    setNewPercent(p => p - 10);
  };

  return (
    <ThemeContextProvider>
      <ThemeContext.Consumer>
        {({ isThemeDark, toggleTheme }) => {
          const theme = isThemeDark ? appDarkTheme : appLightTheme;
          return (
            <ThemeProvider theme={theme}>
              <NavigationContainer theme={theme}>
                <SafeAreaView style={styles.root}>
                  <PaperProvider theme={theme}>
                    <View style={[styles.actions, { backgroundColor: theme.colors.background }]}>
                      <Button
                        mode="contained"
                        theme={theme}
                        onPress={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}>
                        {t(`lang.${i18n.language}`)}
                      </Button>
                      <Button theme={theme} mode="contained" onPress={toggleTheme}>
                        Theme
                      </Button>
                    </View>
                    <Text theme={theme} style={{ backgroundColor: theme.colors.background }}>
                      {t('welcome')}
                    </Text>
                    <View style={styles.gameProgressWrapper}>
                      <GameProgress previousPercent={previousPercent} newPercent={newPercent} />
                    </View>
                    <View style={styles.actions}>
                      <Button theme={theme} icon="watch" mode="contained" onPress={decreaseProgress}>
                        Devine quoi ?
                      </Button>
                    </View>
                  </PaperProvider>
                </SafeAreaView>
              </NavigationContainer>
            </ThemeProvider>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeContextProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  gameProgressWrapper: {
    flex: 1,
  },
  actions: {
    alignItems: 'center',
  },
});

export default App;
