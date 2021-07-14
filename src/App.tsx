import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-lottie-splash-screen';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.root}>
        <Button
          icon="zodiac-sagittarius"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Devine quoi ?
        </Button>
      </SafeAreaView>
    </PaperProvider>
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
