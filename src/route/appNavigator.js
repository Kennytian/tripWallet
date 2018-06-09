import { createStackNavigator } from 'react-navigation';
import AppRouteConfigs from './routeConfig';

const AppRouteOptions = {
  headerMode: 'screen',
  cardStyle: { backgroundColor: '#f6f6f6' },
  navigationOptions: {
    headerTitleAllowFontScaling: false,
  },
};

export default createStackNavigator(AppRouteConfigs, AppRouteOptions);
