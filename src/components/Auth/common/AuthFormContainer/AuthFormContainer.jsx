import { FormTitle, StyledContainer } from './AuthFormContainer.styled';
import PropTypes from 'prop-types';

function AuthFormContainer({ title, children }) {
  return (
    <StyledContainer>
      <FormTitle>{title}</FormTitle>
      {children}
    </StyledContainer>
  );
}

AuthFormContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default AuthFormContainer;
