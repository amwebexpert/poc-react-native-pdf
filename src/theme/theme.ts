import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import { DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';
import { Theme as PaperTheme } from 'react-native-paper/lib/typescript/types';

const BASE_SPACING = 8;

// Customized theme attributes
type CustomTheme = {
  spacing: (value: number) => number;
  colors: {
    tab: {
      activeTintColor: string;
      inactiveTintColor: string;
    };
  };
};

export type AppTheme = PaperTheme & NavigationTheme & CustomTheme;

const appCommonTheme = {
  // paper does not yet support spacing function: https://github.com/callstack/react-native-paper/issues/1869
  spacing: (n: number) => BASE_SPACING * n,
  roundness: 8,
  borderWidthThin: 1,
};

const lightTheme = {
  colors: {
    primary: '#bf3a2b',
    secondary: '#e84b3c',
    background: '#ffffff',
    text: '#bf3a2b',
    tab: {
      activeTintColor: '#000000',
      inactiveTintColor: '#808080',
    },
  },
};

const darkTheme = {
  colors: {
    primary: '#bf3a2b',
    secondary: '#e84b3c',
    background: '#000000',
    text: '#ffffff',
    tab: {
      activeTintColor: '#000000',
      inactiveTintColor: '#808080',
    },
  },
};

export const appLightTheme: AppTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  ...appCommonTheme,
  ...lightTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    ...lightTheme.colors,
  },
};

export const appDarkTheme: AppTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  ...appCommonTheme,
  ...darkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    ...darkTheme.colors,
  },
};
