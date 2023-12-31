import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth/useAuth';
import { useEffect, useState } from 'react';
import { useFormik, FormikContext } from 'formik';
import { login } from '../../../redux/auth/operations';
import { FormTextField } from '../common/FormTextField/FormTextField';
import { FormPasswordContainer } from '../common/FormPasswordContainer/FormPasswordContainer';
import { AuthFormBtn } from '../common/AuthFormBtn/AuthFormBtn';
import AuthGoogleBtn from '../common/AuthGoogleBtn';
import {
  FormLink,
  FormText,
} from '../common/AuthFormContainer/AuthFormContainer.styled';
import 'react-toastify/dist/ReactToastify.css';
import { LoginSchema } from './LoginSchema';
import { t } from 'i18next';
import { Trans } from 'react-i18next';

export const LoginForm = () => {
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
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async values => {
      dispatch(login(values));
    },
  });

  return (
    <FormikContext.Provider value={formik}>
      <form onSubmit={handleFormSubmit} noValidate>
        <FormTextField
          name="email"
          type="email"
          label="Email"
          placeholder={t('other_email')}
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
            placeholder={t('other_password')}
            isFormSubmitted={isFormSubmitted}
            {...formik.getFieldProps('password')}
          />
        </FormPasswordContainer>
        <AuthFormBtn btnText={t('other_login')} />
        <AuthGoogleBtn />
        <FormText>
          <Trans i18nKey="auth_linkToRegister">
            Do not have an account? <FormLink to="/register">Register</FormLink>
          </Trans>
        </FormText>
      </form>
    </FormikContext.Provider>
  );
};
