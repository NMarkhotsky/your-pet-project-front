import * as Yup from 'yup';

//AXIOS
export const BASE_URL = import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? '/api' : 'https://your-pet-project-backend.vercel.app/api');

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
    .nullable()
    .transform((value, original) => original === '' ? null : value)
    .min(new Date(1900, 0, 1))
    .max(new Date(), "You can't be born in the future!"),
  phone: Yup.string().matches(phoneRegExp, { message: 'Invalid phone number', excludeEmptyString: true }),
  city: Yup.string().max(30).test('city-length', 'City must contain at least 2 characters', value => !value || value.length >= 2),
});
