import {Toast} from 'native-base';

export default class Util {
  public static showToast = (message: string) => {
    Toast.show({
      text: message,
      buttonText: 'Ok',
      duration: 10000,
      type: 'danger',
    });
  };

  public static isValidEmail = email => {
    const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
    return expression.test(String(email).toLowerCase());
  };
}
