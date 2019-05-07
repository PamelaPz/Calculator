import { createStackNavigator, createAppContainer } from 'react-navigation';

import Calculator from '../screens/Calculator';
import Secret from '../screens/Secret';


const navigator = createAppContainer(createStackNavigator({

  Calculator: {
    screen: Calculator,
    navigationOptions: {
      header: null
    }
  },
  Secret: {
    screen: Secret
  }

}));

export default navigator;