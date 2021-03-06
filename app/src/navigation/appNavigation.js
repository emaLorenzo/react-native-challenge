import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from 'screens/Home/HomeScreen';
import DetailScreen from 'screens/Detail/DetailScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Challenge',
    },
  },
  Detail: DetailScreen,
});

export default createAppContainer(AppNavigator);
