import React from 'react';
import {
  Button,
  Container,
  Form,
  Input,
  Item,
  Label,
  Text,
  View,
} from 'native-base';
import {Image, Pressable} from 'react-native';
import styles from './Signup.style';
import useSignup from './useSignup';

const Signup = ({navigation}) => {
  const {setEmailText, setPasswordText, setConfirmPasswordText, validateUser} =
    useSignup(navigation);
  return (
    <Container>
      <View style={styles.logoView}>
        <Image
          style={styles.signupLogo}
          source={require('../../assets/images/img.png')}
        />
      </View>
      <Form>
        <Item floatingLabel style={styles.signupTextfield}>
          <Label>Email</Label>
          <Input
            onChangeText={s => setEmailText(s)}
            keyboardType={'email-address'}
            autoCompleteType={'email'}
          />
        </Item>
        <Item floatingLabel style={styles.signupTextfield}>
          <Label>Password</Label>
          <Input onChangeText={s => setPasswordText(s)} secureTextEntry />
        </Item>
        <Item floatingLabel style={styles.signupTextfield}>
          <Label>Confirm Password</Label>
          <Input
            onChangeText={s => setConfirmPasswordText(s)}
            secureTextEntry
          />
        </Item>
      </Form>
      <Button
        rounded
        style={styles.signupButton}
        onPress={() => validateUser()}>
        <Text>Sign Up</Text>
      </Button>
      <View style={styles.accountTextView}>
        <Text style={styles.accountText}>Already have an account?</Text>
        <Pressable
          style={styles.accountText}
          onPress={() => navigation.navigate('Log In')}>
          <Text style={styles.loginPressableText}> Log In</Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default Signup;
