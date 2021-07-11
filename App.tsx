import React from 'react';
import {Button, Container, Root, View} from 'native-base';
import {Image, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Root>
        <Container>
          <View style={{flex: 7, backgroundColor: '#CFF6FF'}}>
            <Image
              style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
                marginTop: 175,
              }}
              source={require('./assets/images/img.png')}
            />
          </View>
          <Button full style={{flex: 1, backgroundColor: '#e9b558'}}>
            <Text style={{fontWeight: 'bold', fontSize: 36, color: 'white'}}>
              Log In
            </Text>
          </Button>
          <Button full style={{flex: 1, backgroundColor: '#38BC73'}}>
            <Text style={{fontWeight: 'bold', fontSize: 36, color: 'white'}}>
              Sign Up
            </Text>
          </Button>
        </Container>
      </Root>
    </NavigationContainer>
  );
};

export default App;
