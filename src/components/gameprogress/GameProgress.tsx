import { default as AnimatedLottieView, default as LottieView } from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';

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

  return <LottieView ref={animation} style={styles.root} source={SOURCE} autoPlay={false} loop={false} speed={-0.25} />;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
  },
});

export default React.memo(GameProgress);
