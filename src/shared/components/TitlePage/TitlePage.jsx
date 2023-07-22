import PropTypes from 'prop-types';
import { Title, TitleContainer } from './TitlePage.styled';

export const TitlePage = ({ children }) => {
  return (
    <TitleContainer>
      <Title>{children}</Title>
    </TitleContainer>
  );
};

TitlePage.propTypes = {
  children: PropTypes.any.isRequired,
};
