import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Pdf from 'react-native-pdf';

type Props = {
  uri: string;
};

const PDFViewer = ({ uri }: Props) => {
  return (
    <Pdf
      source={{ uri, cache: true }}
      style={styles.pdf}
      onLoadComplete={(numberOfPages, filePath) => console.log('onLoadComplete', { numberOfPages, filePath })}
      onPageChanged={(page, numberOfPages) => console.log('onPageChanged', { page, numberOfPages })}
      onError={error => console.error(error)}
      onPressLink={link => console.log(`Link pressed: ${link}`)}
    />
  );
};

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: '100%',
  },
});

export default PDFViewer;
