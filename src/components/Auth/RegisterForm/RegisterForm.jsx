import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth/useAuth';
import { useFormik, FormikContext } from 'formik';
import { register } from '../../../redux/auth/operations';
import { FormTextField } from '../common/FormTextField/FormTextField';
import { AuthFormBtn } from '../common/AuthFormBtn/AuthFormBtn';
import {
  FormLink,
  FormText,
} from '../common/AuthFormContainer/AuthFormContainer.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RegisterSchema } from './RegisterSchema';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: RegisterSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: ({ name, email, password }) => {
      const newUser = { name, email, password };
      // console.log(JSON.stringify(newUser, null, 2));
      formik.validateForm().then(errors => {
        if (Object.keys(errors).length === 0) {
          dispatch(register(JSON.stringify(newUser, null, 2))).then(() => {
            if (error) {
              toast.error(error, {
                position: toast.POSITION.TOP_CENTER,
              });
            } else {
              navigate('/user');
            }
          });
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
          name="name"
          type="text"
          label="Name"
          placeholder="Name"
          {...formik.getFieldProps('name')}
        />
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
          successMessage="Password is secure"
          {...formik.getFieldProps('password')}
        />
        <FormTextField
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Confirm password"
          {...formik.getFieldProps('confirmPassword')}
        />
        <AuthFormBtn btnText="Registration" />
        <FormText>
          Already have an account? <FormLink to="/login">Login</FormLink>
        </FormText>
      </form>
      <ToastContainer />
    </FormikContext.Provider>
  );
};
