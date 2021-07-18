import { useWindowDimensions } from 'react-native';

const useIsLandscape = () => {
  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  return height < width;
};

export default useIsLandscape;
