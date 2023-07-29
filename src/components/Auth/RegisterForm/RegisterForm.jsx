import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth/useAuth';
import { useEffect, useState } from 'react';
import { useFormik, FormikContext } from 'formik';
import { register } from '../../../redux/auth/operations';
import { FormTextField } from '../common/FormTextField/FormTextField';
import { FormPasswordContainer } from '../common/FormPasswordContainer/FormPasswordContainer';
import { AuthFormBtn } from '../common/AuthFormBtn/AuthFormBtn';
import {
  FormLink,
  FormText,
} from '../common/AuthFormContainer/AuthFormContainer.styled';
import { RegisterSchema } from './RegisterSchema';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const toggleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async ({ name, email, password }) => {
      const newUser = { name, email, password };
      dispatch(register(newUser));
    },
  });

  return (
    <FormikContext.Provider value={formik}>
      <form onSubmit={handleFormSubmit} noValidate>
        <FormTextField
          name="name"
          type="text"
          label="Name"
          placeholder="Name"
          isFormSubmitted={isFormSubmitted}
          {...formik.getFieldProps('name')}
        />
        <FormTextField
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          isFormSubmitted={isFormSubmitted}
          {...formik.getFieldProps('email')}
        />
        <FormPasswordContainer
          isPasswordShown={isPasswordShown}
          isFormSubmitted={isFormSubmitted}
          onClick={toggleShowPassword}
        >
          <FormTextField
            name="password"
            type={isPasswordShown ? 'text' : 'password'}
            label="Password"
            placeholder="Password"
            successMessage="Password is secure"
            isFormSubmitted={isFormSubmitted}
            {...formik.getFieldProps('password')}
          />
        </FormPasswordContainer>
        <FormPasswordContainer
          isPasswordShown={isPasswordShown}
          isFormSubmitted={isFormSubmitted}
          onClick={toggleShowPassword}
        >
          <FormTextField
            name="confirmPassword"
            type={isPasswordShown ? 'text' : 'password'}
            label="Confirm password"
            placeholder="Confirm password"
            successMessage="Password confirmed"
            isFormSubmitted={isFormSubmitted}
            {...formik.getFieldProps('confirmPassword')}
          />
        </FormPasswordContainer>
        <AuthFormBtn btnText="Registration" />
        <FormText>
          Already have an account? <FormLink to="/login">Login</FormLink>
        </FormText>
      </form>
    </FormikContext.Provider>
  );
};
