import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('This field is required'),
  password: Yup.string()
    .min(6, 'Password must be min 6 characters long')
    .max(16, 'Password must be max 16 characters long')
    .matches(/[0-9]/, 'Password requires at least one number')
    .matches(/[a-z]/, 'Password requires at least one lowercase letter')
    .matches(/[A-Z]/, 'Password requires at least one uppercase letter')
    .required('This field is required'),
});
