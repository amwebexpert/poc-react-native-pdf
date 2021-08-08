import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import PDFViewer from '../PDVViewer/PDFViewer';

const Home = () => {
  const uri = 'http://samples.leanpub.com/thereactnativebook-sample.pdf';
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>{uri}</Text>
      <PDFViewer uri={uri} />
    </SafeAreaView>
  );
};

const useStyles = () => {
  return StyleSheet.create({
    root: {
      flex: 1,
    },
    title: {
      color: 'navy',
      padding: 2,
      borderColor: 'navy',
      borderWidth: 1,
      backgroundColor: 'white',
    },
  });
};

export default Home;
