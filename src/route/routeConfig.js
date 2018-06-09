import { createStackNavigator } from 'react-navigation';
import DetailScreen from '../container/detail-screen';
import ListScreen from '../container/list-screen';
import HomeScreen from '../container/home-screen';

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
