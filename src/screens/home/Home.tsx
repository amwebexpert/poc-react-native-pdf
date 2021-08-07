import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from 'react-native-paper';

const Home = () => {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.root}>
      <Text>Test</Text>
    </SafeAreaView>
  );
};

const useStyles = () => {
  return StyleSheet.create({
    root: {
      flex: 1,
    },
  });
};

export default Home;
