import { BtnStyled } from './Btn.styled';
import PropTypes from 'prop-types';
export const Btn = ({ children }) => {
  return <BtnStyled type="button">{children}</BtnStyled>;
};
Btn.propTypes = {
  children: PropTypes.any.isRequired,
};
