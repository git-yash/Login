import React from 'react';
import {Root} from 'native-base';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from './screens/StartScreen/StartScreen';
import Signup from './screens/SignupScreen/Signup';
import Login from './screens/LoginScreen/Login';
import Home from './screens/HomeScreen/Home';

const App = () => {
  const Stack = createStackNavigator();

  const LoginStack = () => {
    return (
      <Root>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={'Back'}
              component={StartScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name={'Log In'} component={Login} />
            <Stack.Screen name={'Sign Up'} component={Signup} />
            <Stack.Screen
              name={'Home'}
              component={Home}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
    );
  };

  return <Root>{LoginStack()}</Root>;
};

export default App;
