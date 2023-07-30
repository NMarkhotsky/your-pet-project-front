import PropTypes from 'prop-types';
import { GoogleBtn, GoogleIcon } from './AuthGoogleBtn.styled';
import { Icon } from '../../../Icon/Icon';

export const AuthGoogleBtn = ({ btnText }) => {
  return (
    <GoogleBtn href="https://mypets-backend.onrender.com/api/auth/google">
      <GoogleIcon>
        <Icon iconName={'icon-google'} />
      </GoogleIcon>
      {btnText}
    </GoogleBtn>
  );
};

AuthGoogleBtn.propTypes = {
  btnText: PropTypes.string.isRequired,
};
