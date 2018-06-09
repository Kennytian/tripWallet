import { createStackNavigator } from 'react-navigation';
import DetailScreen from './container/DetailScreen';
import ListScreen from './container/listScreen';
import HomeScreen from './container/HomeScreen';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: '首页',
    }),
  },
  List: {
    screen: ListScreen,
    navigationOptions: () => ({
      title: '列表',
    }),
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: () => ({
      title: '详情',
    }),
  },
});

export default RootStack;
