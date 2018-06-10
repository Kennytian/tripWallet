import { Platform, NativeModules } from 'react-native';

export default {
  getLocale() {
    let locale = null;
    if (Platform.OS === 'ios') {
      locale = NativeModules.SettingsManager.settings.AppleLocale;
      switch (locale) {
        case 'zh-Hant_US':
          locale = 'zh_tw';
          break;
        case 'zh-Hans_US':
          locale = 'zh_cn';
          break;
        case 'ko-Kore_US':
          locale = 'ko';
          break;
        default:
          locale = 'en';
      }
    } else {
      const rawLocale = NativeModules.I18nManager.localeIdentifier;
      locale = rawLocale.substr(0, 2).toLowerCase();
      if (locale === 'zh') {
        locale = rawLocale.substr(0, 5).toLowerCase();
      }
    }
    return locale;
  },

};
