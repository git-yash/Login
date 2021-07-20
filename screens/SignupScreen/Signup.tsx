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
  View,
} from 'native-base';
import {Image, Pressable} from 'react-native';
import Users from '../../models/Users';
import User from '../../models/User';

const Signup = ({navigation}) => {
  const [emailText, setEmailText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');
  const [confirmPasswordText, setConfirmPasswordText] = useState<string>('');

  const showToast = (message: string) => {
    Toast.show({
      text: message,
      buttonText: 'Ok',
      duration: 10000,
      type: 'danger',
    });
  };

  const validateUser = () => {
    if (emailText !== '' || passwordText !== '' || confirmPasswordText !== '') {
      if (passwordText === confirmPasswordText) {
        if (!Users.doesUserExist(emailText)) {
          Users.users.push(new User(emailText, passwordText));
          navigation.navigate('Log In');
        } else {
          showToast('This account already exists!');
        }
      } else {
        showToast('Confirm password does not match!');
      }
    } else {
      showToast('Please fill in all inputs');
    }
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
      <Form>
        <Item floatingLabel style={{width: 350, alignSelf: 'center'}}>
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
        <Item floatingLabel style={{width: 350, alignSelf: 'center'}}>
          <Label>Confirm Password</Label>
          <Input
            onChangeText={s => setConfirmPasswordText(s)}
            secureTextEntry
          />
        </Item>
      </Form>
      <Button
        rounded
        style={{
          alignSelf: 'center',
          marginTop: 50,
          backgroundColor: '#3dbc73',
        }}
        onPress={() => validateUser()}>
        <Text>Sign Up</Text>
      </Button>
      <View style={{flexDirection: 'row', alignSelf: 'center', paddingTop: 20}}>
        <Text style={{marginTop: 30}}>Already have an account?</Text>
        <Pressable
          style={{marginTop: 30}}
          onPress={() => navigation.navigate('Log In')}>
          <Text style={{color: '#3dbc73'}}> Log In</Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default Signup;
