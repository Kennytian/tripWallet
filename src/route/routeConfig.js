/* eslint-disable react/prop-types */
import React from 'react';
import Detail from '../container/detail';
import List from '../container/list';
import Home from '../container/home';
import BackButton from '../container/components/BackButton';

import I18n from '../translations/i18n';

export default {
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: I18n.t('home'),
    }),
  },
  List: {
    screen: List,
    navigationOptions: props => ({
      title: I18n.t('list'),
      headerLeft: () => <BackButton onPress={() => props.navigation.goBack()} {...props} />,
    }),
  },
  Detail: {
    screen: Detail,
    navigationOptions: props => ({
      title: I18n.t('detail'),
      headerLeft: () => <BackButton onPress={() => props.navigation.goBack()} {...props} />,
    }),
  },
};
