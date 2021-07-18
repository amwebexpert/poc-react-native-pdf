import { default as AnimatedLottieView, default as LottieView } from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

type Props = {
  previousPercent: number;
  newPercent: number;
};

const SOURCE = require('./game-progress.json');
const FRAME_MIN = 30;
const FRAME_MAX = 60;
const ANIMATED_FRAMES = FRAME_MAX - FRAME_MIN;

const GameProgress = ({ previousPercent, newPercent }: Props) => {
  const animation = useRef<AnimatedLottieView>(null);

  useEffect(() => {
    console.log({ previousPercent, newPercent });
    const from = (previousPercent / 100) * ANIMATED_FRAMES + FRAME_MIN;
    const to = (newPercent / 100) * ANIMATED_FRAMES + FRAME_MIN;
    console.log({ from, to });
    animation.current!.play(from, to);
  }, [animation, previousPercent, newPercent]);

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <LottieView ref={animation} style={styles.behind} source={SOURCE} autoPlay={false} loop={false} speed={-0.25} />
        <Text style={styles.percent}>{newPercent} %</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  behind: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  percent: {
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: 'grey',
    marginTop: 100,
  },
});

export default GameProgress;
