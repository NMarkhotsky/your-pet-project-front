import { BackgrdImg } from './BackgroundWrapper.styled';
import PropTypes from 'prop-types';

export const BackgroundWrapper = ({ children }) => {
  return <BackgrdImg>{children}</BackgrdImg>;
};
BackgroundWrapper.propTypes = {
  children: PropTypes.any.isRequired,
};
