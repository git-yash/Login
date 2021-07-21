import {useState} from 'react';
import Users from '../../models/Users';
import User from '../../models/User';
import Util from '../../Util/Util';

const useSignup = ({navigation}) => {
  const [emailText, setEmailText] = useState<string>('');
  const [passwordText, setPasswordText] = useState<string>('');
  const [confirmPasswordText, setConfirmPasswordText] = useState<string>('');

  const validateUser = () => {
    if (emailText !== '' || passwordText !== '' || confirmPasswordText !== '') {
      if (Util.isValidEmail(emailText)) {
        if (passwordText === confirmPasswordText) {
          if (!Users.doesUserExist(emailText)) {
            Users.users.push(new User(emailText, passwordText));
            navigation.navigate('Log In');
          } else {
            Util.showToast('This account already exists!');
          }
        } else {
          Util.showToast('Confirm password does not match!');
        }
      } else {
        Util.showToast('Invalid email');
      }
    } else {
      Util.showToast('Please fill in all inputs');
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
