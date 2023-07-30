import { GoogleBtn, GoogleIcon } from './AuthGoogleBtn.styled';
import { Icon } from '../../../Icon/Icon';

export const AuthGoogleBtn = () => {
  return (
    <GoogleBtn href="https://mypets-backend.onrender.com/api/auth/google">
      <GoogleIcon>
        <Icon iconName={'icon-google'} />
      </GoogleIcon>
      Continue with Google
    </GoogleBtn>
  );
};
