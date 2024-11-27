import * as Yup from 'yup';

//AXIOS
export const BASE_URL = 'https://your-pet-project-backend.vercel.app/api';
// export const BASE_URL = 'http://localhost:3000/api';

export const CATEGORIES = {
  SELL: 'sell',
  LOST_FOUND: 'lost-or-found',
  IN_GOOD_HANDS: 'in-good-hands',
};

export const CATEGORIES_RENDER = {
  sell: 'sell',
  'lost-or-found': 'lost or found',
  'in-good-hands': 'in good hands',
  favorite: 'favorite',
  'my-ads': 'my ads',
};

export const AGE_FILTER = {
  YOUNG: 'young',
  MIDDLE: 'middle',
  OLDER: 'older',
};

export const SEX = {
  MALE: 'male',
  FEMALE: 'female',
};

// MESSAGES

// REGEXP
const phoneRegExp = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/;

// IMAGE SIZE
export const FILE_SIZE = 3000000;

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
