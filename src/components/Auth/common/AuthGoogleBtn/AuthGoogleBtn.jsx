import { GoogleBtn, GoogleIcon } from './AuthGoogleBtn.styled';
import { Icon } from '../../../Icon/Icon';
import { useTranslation } from 'react-i18next';

export const AuthGoogleBtn = () => {
  const { t } = useTranslation();

  return (
    <GoogleBtn href="https://mypets-backend.onrender.com/api/auth/google">
      <GoogleIcon>
        <Icon iconName={'icon-google'} />
      </GoogleIcon>
      {t('auth_googleBtn')}
    </GoogleBtn>
  );
};
