import * as Yup from 'yup';

export const validationPersonalDetailsPlus = Yup.object().shape({
  name: Yup.string().required('Please enter pet name'),
  birthday: Yup.date()
    .max(new Date(), 'Date of birth cannot be in the future')
    .required('Please enter date of birth'),
  type: Yup.string().required('Please enter breed'),
  title: Yup.string()
    .max(30, 'Title must be at most 30 characters')
    .required('Please enter title'),
});
