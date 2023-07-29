import { useField } from 'formik';
import {
  ErrorMessage,
  FormIconContainer,
  FormInput,
  FormInputContainer,
  SuccessMessage,
} from './FormTextField.styled';
import PropTypes from 'prop-types';
import { Icon } from '../../../Icon/Icon';

export const FormTextField = ({
  successMessage,
  isFormSubmitted,
  ...props
}) => {
  const [field, meta] = useField(props);

  const invalid = isFormSubmitted && meta.error;
  const valid = isFormSubmitted && !meta.error;

  return (
    <>
      <FormInputContainer>
        <FormInput {...field} {...props} $invalid={invalid} $valid={valid} />
        {invalid ? (
          <>
            <FormIconContainer>
              <Icon
                iconName={'icon-cross'}
                stroke={'#F43F5E'}
                fill={'#F43F5E'}
              />
            </FormIconContainer>
            <ErrorMessage>{meta.error}</ErrorMessage>
          </>
        ) : null}
        {valid ? (
          <FormIconContainer>
            <Icon iconName={'icon-check'} stroke={'#00C3AD'} fill={'#00C3AD'} />
          </FormIconContainer>
        ) : null}
        {valid && successMessage ? (
          <SuccessMessage>{successMessage}</SuccessMessage>
        ) : null}
      </FormInputContainer>
    </>
  );
};

FormTextField.propTypes = {
  successMessage: PropTypes.string,
  isFormSubmitted: PropTypes.bool.isRequired,
};
