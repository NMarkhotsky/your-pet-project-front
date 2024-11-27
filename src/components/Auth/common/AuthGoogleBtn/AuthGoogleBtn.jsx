import { GoogleBtn, GoogleIcon } from './AuthGoogleBtn.styled';
import { Icon } from '../../../Icon/Icon';
import { useTranslation } from 'react-i18next';
import { BASE_URL } from '../../../../constants/globalConstants';

export const AuthGoogleBtn = () => {
  const { t } = useTranslation();

  return (
    <GoogleBtn href={`${BASE_URL}/auth/google`}>
      <GoogleIcon>
        <Icon iconName={'icon-google'} />
      </GoogleIcon>
      {t('auth_googleBtn')}
    </GoogleBtn>
  );
};
