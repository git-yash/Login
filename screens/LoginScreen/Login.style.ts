import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logoView: {
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
  },
  logoImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 30,
  },
  loginForm: {paddingTop: 20},
  loginTextfield: {width: 350, alignSelf: 'center'},
  loginButton: {
    alignSelf: 'center',
    marginTop: 70,
    backgroundColor: '#3dbc73',
  },
  loginTextView: {flexDirection: 'row', alignSelf: 'center', paddingTop: 50},
  loginText: {marginTop: 30},
  signupText: {color: '#3dbc73'},
});

export default styles;
