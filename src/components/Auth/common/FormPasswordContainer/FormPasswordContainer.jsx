import {
  FormIconEyeContainer,
  FormPasswordInputContainer,
} from './FormPasswordContainer.styled';
import PropTypes from 'prop-types';
import { Icon } from '../../../Icon/Icon';

export const FormPasswordContainer = ({
  isPasswordShown,
  isFormSubmitted,
  onClick,
  children,
}) => {
  return (
    <>
      <FormPasswordInputContainer>
        {children}
        <FormIconEyeContainer type="button" aria-label="Show or hide password" aria-pressed={isPasswordShown} $validated={isFormSubmitted} onClick={onClick}>
          {isPasswordShown ? (
            <Icon
              iconName={'icon-eye-open'}
              stroke={'#54ADFF'}
              fill={'#54ADFF'}
            />
          ) : (
            <Icon
              iconName={'icon-eye-closed'}
              stroke={'#54ADFF'}
              fill={'#54ADFF'}
            />
          )}
        </FormIconEyeContainer>
      </FormPasswordInputContainer>
    </>
  );
};

FormPasswordContainer.propTypes = {
  isPasswordShown: PropTypes.bool,
  isFormSubmitted: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
