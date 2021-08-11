import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import PDFViewer from '../PDVViewer/PDFViewer';
import { dataUrlExample } from './constants';

const Home = () => {
  let uri = dataUrlExample; // that default example is very simple (just a centered text on 1 page)
  // uri = 'http://samples.leanpub.com/thereactnativebook-sample.pdf'; // this example is a small book with coverpage

  const styles = useStyles();

  return (
    <SafeAreaView style={styles.root}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {uri}
      </Text>
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
