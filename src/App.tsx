import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-lottie-splash-screen';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import GameProgress from './components/gameprogress/GameProgress';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);
  const [previousPercent, setPreviousPercent] = useState<number>(100);
  const [newPercent, setNewPercent] = useState<number>(100);

  const decreaseProgress = () => {
    setPreviousPercent(newPercent);
    setNewPercent(p => p - 10);
  };

  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={styles.root}>
          <Button icon="zodiac-sagittarius" mode="contained" onPress={decreaseProgress}>
            Devine quoi ?
          </Button>
          <GameProgress previousPercent={previousPercent} newPercent={newPercent} />
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
