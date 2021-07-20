import React, {useState} from 'react';
import {
  Button,
  Container,
  Form,
  Input,
  Item,
  Label,
  Text,
  Toast,
} from 'native-base';
import {Image, Pressable, View} from 'react-native';
import Users from '../../models/Users';

const Login = ({navigation}) => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const isValidEmail = email => {
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
    return expression.test(String(email).toLowerCase());
  };

  return (
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
        <Item
          floatingLabel
          style={{width: 350, alignSelf: 'center'}}
          error={!isValidEmail(emailText)}>
          <Label>Email</Label>
          <Input
            onChangeText={s => setEmailText(s)}
            keyboardType={'email-address'}
            autoCompleteType={'email'}
          />
        </Item>
        <Item floatingLabel style={{width: 350, alignSelf: 'center'}}>
          <Label>Password</Label>
          <Input onChangeText={s => setPasswordText(s)} secureTextEntry />
        </Item>
      </Form>
      <Button
        rounded
        style={{
          alignSelf: 'center',
          marginTop: 70,
          backgroundColor: '#3dbc73',
        }}
        onPress={() => {
          if (emailText !== '' && passwordText !== '') {
            if (Users.doesUserExist(emailText)) {
              let currentUser = Users.getUser(emailText);
              if (currentUser.getPassword() === passwordText) {
                navigation.navigate('Home');
              } else {
                Toast.show({
                  text: 'Incorrect password',
                  buttonText: 'Ok',
                  duration: 10000,
                  type: 'danger',
                });
              }
            } else {
              Toast.show({
                text: 'This account does not exist',
                buttonText: 'Ok',
                duration: 10000,
                type: 'danger',
              });
            }
          } else {
            Toast.show({
              text: 'Please fill in all inputs',
              buttonText: 'Ok',
              duration: 10000,
              type: 'danger',
            });
          }
        }}>
        <Text> Log In </Text>
      </Button>
      <View style={{flexDirection: 'row', alignSelf: 'center', paddingTop: 50}}>
        <Text style={{marginTop: 30}}>Don't have an account?</Text>
        <Pressable
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('Sign Up')}>
          <Text style={{color: '#3dbc73'}}> Sign Up</Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default Login;
