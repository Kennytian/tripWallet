/* eslint-disable camelcase */
import I18n from 'react-native-i18n';
import en from './en';
import zh_cn from './zh_cn';
import zh_tw from './zh_tw';
import tools from './tools';

I18n.fallbacks = true;
I18n.locale = tools.getLocale();

I18n.translations = {
  en,
  zh_cn,
  zh_tw,
};

export default I18n;
