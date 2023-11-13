import { UseFormSetError } from 'react-hook-form';

export function validateUserValue(
  message: string,
  setError: UseFormSetError<any>,
  login: boolean
) {
  if (!login) {
    if (/email/.test(message)) {
      setError('email', {
        type: 'custom',
        message: message,
      });
    } else if (/номер|number/.test(message)) {
      setError('number', {
        type: 'custom',
        message: message,
      });
    } else if (/login/.test(message)) {
      setError('login', {
        type: 'custom',
        message: message,
      });
    } else {
      console.log(message);
    }
  } else if (login) {
    if (/email/.test(message)) {
      setError('email', {
        type: 'custom',
        message: message,
      });
    } else if (/password|пароль/.test(message)) {
      setError('password', {
        type: 'custom',
        message: message,
      });
    } else {
      console.log(message);
    }
  }
}
