import React from 'react';
import {Button, Container, Form, Input, Item, Label, Text} from 'native-base';
import {Image, Pressable, View} from 'react-native';
import styles from './Login.style';
import useLogin from './useLogin';

const Login = ({navigation}) => {
  const {setEmailText, setPasswordText, validateLogin} = useLogin(navigation);

  return (
    <Container>
      <View style={styles.logoView}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/img.png')}
        />
      </View>
      <Form style={styles.loginForm}>
        <Item floatingLabel style={styles.loginTextfield}>
          <Label>Email</Label>
          <Input
            onChangeText={s => setEmailText(s)}
            keyboardType={'email-address'}
            autoCompleteType={'email'}
          />
        </Item>
        <Item floatingLabel style={styles.loginTextfield}>
          <Label>Password</Label>
          <Input onChangeText={s => setPasswordText(s)} secureTextEntry />
        </Item>
      </Form>
      <Button
        rounded
        style={styles.loginButton}
        onPress={() => {
          validateLogin();
        }}>
        <Text> Log In </Text>
      </Button>
      <View style={styles.loginTextView}>
        <Text style={styles.loginText}>Don't have an account?</Text>
        <Pressable
          style={styles.loginText}
          onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.signupText}> Sign Up</Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default Login;
