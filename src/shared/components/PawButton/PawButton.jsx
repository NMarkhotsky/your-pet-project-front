import PropTypes from 'prop-types';

import {
  StyledPawButton,
  ButtonText,
  StyledIcon,
  IconWraper,
} from '../../sharedModalStyles/sharedModalStyles.styled';

export const PawButton = ({ onClick, text }) => {
  return (
    <StyledPawButton onClick={onClick}>
      <ButtonText>{text}</ButtonText>
      <IconWraper>
        <StyledIcon iconName="icon-pawprint" fill={'#FDF7F2'} />
      </IconWraper>
    </StyledPawButton>
  );
};

PawButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
