import { BtnStyled } from './Btn.styled';
import PropTypes from 'prop-types';

export const Btn = ({ children, onClick }) => {
  return (
    <BtnStyled type="button" onClick={onClick}>
      {children}
    </BtnStyled>
  );
};

Btn.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
};
