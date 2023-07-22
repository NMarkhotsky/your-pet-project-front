import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth/useAuth';
import { useFormik, FormikContext } from 'formik';
import { login } from '../../../redux/auth/operations';
import { FormTextField } from '../common/FormTextField/FormTextField';
import { AuthFormBtn } from '../common/AuthFormBtn/AuthFormBtn';
import {
  FormLink,
  FormText,
} from '../common/AuthFormContainer/AuthFormContainer.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginSchema } from './LoginSchema';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: values => {
      formik.validateForm().then(errors => {
        if (Object.keys(errors).length === 0) {
          dispatch(login(JSON.stringify(values, null, 2)));
          if (error) {
            toast.error(error, {
              position: toast.POSITION.TOP_CENTER,
            });
            return;
          }
          navigate('/user');
        } else {
          toast.error('Please enter valid values in all the fields', {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
    },
  });

  return (
    <FormikContext.Provider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <FormTextField
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          {...formik.getFieldProps('email')}
        />
        <FormTextField
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          {...formik.getFieldProps('password')}
        />
        <AuthFormBtn btnText="Login" />
        <FormText>
          Do not have an account? <FormLink to="/register">Register</FormLink>
        </FormText>
      </form>
      <ToastContainer />
    </FormikContext.Provider>
  );
};
