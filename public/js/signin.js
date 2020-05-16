import axios from 'axios';
import { showAlert } from './alerts';

export const signin = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3000/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Yor are sign in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 100);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

// test1234
