import {useState} from 'react';
import Users from '../../models/Users';
import Util from '../../Util/Util';

const useSignup = ({navigation}) => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const validateLogin = () => {
    if (emailText !== '' && passwordText !== '') {
      if (Util.isValidEmail(emailText)) {
        if (Users.doesUserExist(emailText)) {
          let currentUser = Users.getUser(emailText);
          if (currentUser.getPassword() === passwordText) {
            navigation.navigate('Home');
          } else {
            Util.showToast('Incorrect Password');
          }
        } else {
          Util.showToast('This account does not exist.');
        }
      } else {
        Util.showToast('Invalid email');
      }
    } else {
      Util.showToast('Please fill in all inputs.');
    }
  };

  return {
    setEmailText,
    setPasswordText,
    validateLogin,
  };
};

export default useSignup;
