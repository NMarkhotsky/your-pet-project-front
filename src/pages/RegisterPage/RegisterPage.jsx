import AuthFormContainer from '../../components/Auth/common/AuthFormContainer/AuthFormContainer';
import { RegisterForm } from '../../components/Auth/RegisterForm/RegisterForm';
import { BackgroundWrapper } from '../../shared/components/BackgroundWrapper/BackgroundWrapper';

function RegisterPage() {
  return (
    <BackgroundWrapper>
      <AuthFormContainer title="Registration">
        <RegisterForm />
      </AuthFormContainer>
    </BackgroundWrapper>
  );
}

export default RegisterPage;
