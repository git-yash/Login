import React from 'react';
import {Root} from 'native-base';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from './screens/StartScreen/StartScreen';
import Signup from './screens/SignupScreen/Signup';
import Login from './screens/LoginScreen/Login';

const App = () => {
  const Stack = createStackNavigator();
  const LoginStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Back'}
            component={StartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name={'Log In'} component={Login} />
          <Stack.Screen name={'Sign Up'} component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return <Root>{LoginStack()}</Root>;
};

export default App;
