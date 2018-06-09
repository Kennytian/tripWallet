/* eslint-disable react/prop-types */
import React from 'react';
import Detail from '../container/detail';
import List from '../container/list';
import Home from '../container/home';
import BackButton from '../container/components/BackButton';

export default {
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: '首页',
    }),
  },
  List: {
    screen: List,
    navigationOptions: props => ({
      title: '列表',
      headerLeft: () => <BackButton onPress={() => props.navigation.goBack()} {...props} />,
    }),
  },
  Detail: {
    screen: Detail,
    navigationOptions: props => ({
      title: '详情',
      headerLeft: () => <BackButton onPress={() => props.navigation.goBack()} {...props} />,
    }),
  },
};
