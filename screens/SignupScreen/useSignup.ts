import {useState} from 'react';
import {Toast} from 'native-base';
import Users from '../../models/Users';
import User from '../../models/User';

const useSignup = ({navigation}) => {
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

  return {
    setEmailText,
    setPasswordText,
    setConfirmPasswordText,
    validateUser,
  };
};

export default useSignup;
