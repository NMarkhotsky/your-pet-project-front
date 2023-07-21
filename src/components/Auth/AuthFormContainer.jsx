import PropTypes from 'prop-types';
import { StyledContainer } from './AuthFormContainer.styled';

function AuthFormContainer({ title, children }) {
  return (
    <StyledContainer>
      <h1>{title}</h1>
      {children}
    </StyledContainer>
  );
}

AuthFormContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default AuthFormContainer;
