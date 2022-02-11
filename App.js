import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Settings from './screens/Settings';

const HomeStack = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail',
    },
  },
});

// const SettingsStack = createStackNavigator({
//   Settings: {
//     screen: Settings,
//     navigationOptions: {
//       title: 'Settings',
//     },
//   },
// });

// const AppNavigator = createBottomTabNavigator({
//   Home: HomeStack,
//   // Settings: SettingsStack,
// }, { initialRouteName: 'Home' })

export default createAppContainer(HomeStack);
