import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-lottie-splash-screen';
import { Button, Provider as PaperProvider } from 'react-native-paper';
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
          <View style={styles.actions}>
            <Button mode="contained" onPress={decreaseProgress}>
              Devine quoi ?
            </Button>
          </View>
          <View style={styles.gameProgressWrapper}>
            <GameProgress previousPercent={previousPercent} newPercent={newPercent} />
          </View>
          <View style={styles.actions}>
            <Button mode="contained" onPress={decreaseProgress}>
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
