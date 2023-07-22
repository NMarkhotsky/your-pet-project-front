import PropTypes from 'prop-types';
import { FormBtn } from './AuthFormBtn.styled';

export const AuthFormBtn = ({ btnText }) => {
  return <FormBtn type="submit">{btnText}</FormBtn>;
};

AuthFormBtn.propTypes = {
  btnText: PropTypes.string.isRequired,
};
