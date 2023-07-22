import AuthFormContainer from '../../components/Auth/common/AuthFormContainer/AuthFormContainer';
import { LoginForm } from '../../components/Auth/LoginForm/LoginForm';

function LoginPage() {
  return (
    <AuthFormContainer title="Login">
      <LoginForm />
    </AuthFormContainer>
  );
}

export default LoginPage;
