import { useFormik, FormikContext } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations';
import { FormTextField } from '../FormTextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      dispatch(register(JSON.stringify(values, null, 2)));
    },
  });

  return (
    <FormikContext.Provider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <FormTextField
          name='name'
          type='text'
          label='Name'
          {...formik.getFieldProps('name')}
        />
        <FormTextField
          name='email'
          type='email'
          label='Email'
          {...formik.getFieldProps('email')}
        />
        <FormTextField
          name='password'
          type='password'
          label='Password'
          {...formik.getFieldProps('password')}
        />
        <button type='submit'>Submit</button>
      </form>
    </FormikContext.Provider>
  );
};
