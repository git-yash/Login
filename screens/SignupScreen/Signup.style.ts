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
  signupLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 30,
  },
  signupTextfield: {width: 350, alignSelf: 'center'},
  signupButton: {
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: '#3dbc73',
  },
  accountTextView: {flexDirection: 'row', alignSelf: 'center', paddingTop: 20},
  accountText: {marginTop: 30},
  loginPressableText: {color: '#3dbc73'},
});

export default styles;
