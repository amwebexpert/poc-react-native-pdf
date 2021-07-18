import { NativeModules, Platform } from 'react-native';
import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './translations';

const DEFAULT_LANGUAGE = 'en';

// creating language detection module
const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lng: string) => void): void => {
    let locale = DEFAULT_LANGUAGE;
    if (Platform.OS === 'ios' && NativeModules.SettingsManager?.settings) {
      locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
    } else if (NativeModules.I18nManager?.localeIdentifier) {
      locale = NativeModules.I18nManager.localeIdentifier;
    }

    callback(locale.substring(0, 2));
  },
  init: (): void => {},
  cacheUserLanguage: (): void => {},
};

export const initI18N = async () =>
  i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: DEFAULT_LANGUAGE,
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
