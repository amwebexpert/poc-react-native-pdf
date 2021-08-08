import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import 'react-native-gesture-handler';
import Pdf from 'react-native-pdf';

type Props = {
  uri: string;
};

const PDFViewer = ({ uri }: Props) => {
  const { width } = useWindowDimensions();

  return (
    <Pdf
      source={{ uri, cache: true }}
      style={[styles.pdf, { width }]}
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
    borderWidth: 2,
    borderColor: 'red',
  },
});

export default PDFViewer;
