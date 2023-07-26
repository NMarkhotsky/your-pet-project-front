import { BackgrdImg } from './BackgroundWrapper.styled';
import PropTypes from 'prop-types';

export const BackgroundImage = ({ children }) => {
  return <BackgrdImg>{children}</BackgrdImg>;
};

BackgroundImage.propTypes = {
  children: PropTypes.any.isRequired,
};
