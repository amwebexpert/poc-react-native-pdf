import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-lottie-splash-screen';
import { Button, Provider as PaperProvider, Text } from 'react-native-paper';
import GameProgress from './components/gameprogress/GameProgress';

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
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={styles.root}>
          <View style={styles.actions}>
            <Button mode="contained" onPress={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}>
              {t(`lang.${i18n.language}`)}
            </Button>
          </View>
          <Text>{t('welcome')}</Text>
          <View style={styles.gameProgressWrapper}>
            <GameProgress previousPercent={previousPercent} newPercent={newPercent} />
          </View>
          <View style={styles.actions}>
            <Button icon="watch" mode="contained" onPress={decreaseProgress}>
              Devine quoi ?
            </Button>
          </View>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
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
