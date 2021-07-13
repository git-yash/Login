import React from 'react';
import {
  Button,
  Container,
  Text,
  Form,
  Input,
  Item,
  Label,
  Root,
} from 'native-base';
import {Image, Pressable, View} from 'react-native';
import Signup from '../SignupScreen/Signup';

function Login({navigation}) {
  return (
    <Root>
      <Container>
        <View
          style={{
            backgroundColor: '#CFF6FF',
            height: 160,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#ddd',
            borderBottomWidth: 0,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.9,
            shadowRadius: 3,
            elevation: 7,
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              alignSelf: 'center',
              marginTop: 30,
            }}
            source={require('../../assets/images/img.png')}
          />
        </View>
        <Form style={{paddingTop: 20}}>
          <Item floatingLabel style={{width: 350, alignSelf: 'center'}}>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item floatingLabel last style={{width: 350, alignSelf: 'center'}}>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
        <Button
          rounded
          style={{
            alignSelf: 'center',
            marginTop: 70,
            backgroundColor: '#3dbc73',
          }}>
          <Text> Log In </Text>
        </Button>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={{marginTop: 30}}>Don't have an account?</Text>
          <Pressable
            style={{marginTop: 30}}
            onPress={() => navigation.navigate('Sign Up')}>
            <Text style={{color: '#3dbc73'}}> Sign Up</Text>
          </Pressable>
        </View>
      </Container>
    </Root>
  );
}

export default Login;
