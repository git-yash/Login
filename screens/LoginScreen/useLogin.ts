import {useState} from 'react';
import {Toast} from 'native-base';
import Users from '../../models/Users';

const useSignup = ({navigation}) => {
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const isValidEmail = email => {
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
    return expression.test(String(email).toLowerCase());
  };

  const showToast = (message: string) => {
    Toast.show({
      text: message,
      buttonText: 'Ok',
      duration: 10000,
      type: 'danger',
    });
  };

  const validateLogin = () => {
    if (emailText !== '' && passwordText !== '') {
      if (Users.doesUserExist(emailText)) {
        let currentUser = Users.getUser(emailText);
        if (currentUser.getPassword() === passwordText) {
          navigation.navigate('Home');
        } else {
          showToast('Incorrect Password');
        }
      } else {
        showToast('This account does not exist.');
      }
    } else {
      showToast('Please fill in all inputs.');
    }
  };

  return {
    isValidEmail,
    setEmailText,
    setPasswordText,
    validateLogin,
    emailText,
  };
};

export default useSignup;
