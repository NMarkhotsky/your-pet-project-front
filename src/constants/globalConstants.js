import * as Yup from 'yup';

//AXIOS
export const BASE_URL = 'https://mypets-backend.onrender.com/api';

// MESSAGES

// REGEXP
const phoneRegExp = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/;

// SCHEMA
export const schema = Yup.object().shape({
  name: Yup.string().min(2).max(16).required('Name  is required field'),
  birthday: Yup.date()
    .required('Enter a date of birth')
    .min(new Date(1900, 0, 1))
    .max(new Date(), "You can't be born in the future!"),
  phone: Yup.string().matches(phoneRegExp, 'Invalid phone number'),
  city: Yup.string().min(2).max(16),
});
