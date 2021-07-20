import React from 'react';
import {Button, Container, View} from 'native-base';
import {Image, Text} from 'react-native';
import styles from './StartScreen.style';

const StartScreen = ({navigation}) => {
  return (
    <Container>
      <View style={styles.logoView}>
        <Image
          style={styles.startLogo}
          source={require('../../assets/images/img.png')}
        />
      </View>
      <Button
        full
        onPress={() => navigation.navigate('Log In')}
        style={styles.loginButton}>
        <Text style={styles.loginText}>Log In</Text>
      </Button>
      <Button
        full
        onPress={() => navigation.navigate('Sign Up')}
        style={styles.signupButton}>
        <Text style={styles.signupText}>Sign Up</Text>
      </Button>
    </Container>
  );
};

export default StartScreen;
