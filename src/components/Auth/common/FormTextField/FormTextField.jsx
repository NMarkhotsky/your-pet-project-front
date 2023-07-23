import { useField } from 'formik';

import {
  ErrorMessage,
  FormInput,
  FormInputContainer,
  SuccessMessage,
} from './FormTextField.styled';
import PropTypes from 'prop-types';

export const FormTextField = ({ successMessage, ...props }) => {
  const [field, meta] = useField(props);
  const invalid = meta.touched && meta.error;
  const valid = meta.touched && !meta.error;

  return (
    <>
      <FormInputContainer>
        <FormInput
          {...field}
          {...props}
          $invalid={meta.touched && meta.error}
          $valid={meta.touched && !meta.error}
        />
        {invalid ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
        {valid && successMessage ? (
          <SuccessMessage>{successMessage}</SuccessMessage>
        ) : null}
      </FormInputContainer>
    </>
  );
};

FormTextField.propTypes = {
  successMessage: PropTypes.string,
};
