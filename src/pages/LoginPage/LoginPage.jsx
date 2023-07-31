import { t } from 'i18next';
import AuthFormContainer from '../../components/Auth/common/AuthFormContainer/AuthFormContainer';
import { LoginForm } from '../../components/Auth/LoginForm/LoginForm';
import { BackgroundWrapper } from '../../shared/components/BackgroundWrapper/BackgroundWrapper';

function LoginPage() {
  return (
    <>
      <BackgroundWrapper />
      <AuthFormContainer title={t('other_login')}>
        <LoginForm />
      </AuthFormContainer>
    </>
  );
}

export default LoginPage;
