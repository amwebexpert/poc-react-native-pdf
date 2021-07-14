import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SplashScreen from 'react-native-lottie-splash-screen';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <SafeAreaView style={styles.root}>
      <Text>Devine quoi ?</Text>
    </SafeAreaView>
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
