import { BackgrdImageContainer } from './BackgroundWrapper.styled';
import PropTypes from 'prop-types';

export const BackgroundWrapper = ({ children }) => {
  return <BackgrdImageContainer>{children}</BackgrdImageContainer>;
};
BackgroundWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};
