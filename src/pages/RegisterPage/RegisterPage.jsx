import AuthFormContainer from '../../components/Auth/AuthFormContainer';
import { RegisterForm } from '../../components/Auth/RegisterForm/RegisterForm';

function RegisterPage() {
  return (
    <AuthFormContainer title='Registration'>
      <RegisterForm />
    </AuthFormContainer>
  );
}

export default RegisterPage;
