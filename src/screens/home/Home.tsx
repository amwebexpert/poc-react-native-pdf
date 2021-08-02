import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import Config from 'react-native-config';
import { Button, Surface, Text, useTheme } from 'react-native-paper';
import GameProgress from '../../components/gameprogress/GameProgress';
import { AppTheme } from '../../theme/theme';
import { useThemeContext } from '../../theme/ThemeContextProvider';

const Home = () => {
  const styles = useStyles();
  const { toggleTheme } = useThemeContext();
  const { t, i18n } = useTranslation();
  const [previousPercent, setPreviousPercent] = useState<number>(100);
  const [newPercent, setNewPercent] = useState<number>(100);

  const decreaseProgress = () => {
    setPreviousPercent(newPercent);
    setNewPercent(p => p - 10);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.actions}>
        <Button mode="contained" onPress={() => i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}>
          {t(`lang.${i18n.language}`)}
        </Button>
        <Button mode="contained" onPress={toggleTheme}>
          Theme
        </Button>

        <Text>{t('welcome')}</Text>
        <Text>Environment: {Config.ENV_NAME}</Text>

        <Button icon="home" mode="contained" onPress={decreaseProgress}>
          Devine quoi ?
        </Button>
      </View>

      <Surface style={styles.gameProgressWrapper}>
        <GameProgress previousPercent={previousPercent} newPercent={newPercent} />
      </Surface>
    </SafeAreaView>
  );
};

const useStyles = () => {
  const theme = useTheme() as AppTheme;

  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    gameProgressWrapper: {
      flex: 1,
    },
    actions: {
      alignItems: 'center',
    },
  });
};

export default Home;