import { t } from 'i18next';
import AuthFormContainer from '../../components/Auth/common/AuthFormContainer/AuthFormContainer';
import { RegisterForm } from '../../components/Auth/RegisterForm/RegisterForm';
import { BackgroundWrapper } from '../../shared/components/BackgroundWrapper/BackgroundWrapper';

function RegisterPage() {
  return (
    <>
      <BackgroundWrapper />
      <AuthFormContainer title={t('header_nav_signupBtn')}>
        <RegisterForm />
      </AuthFormContainer>
    </>
  );
}

export default RegisterPage;
