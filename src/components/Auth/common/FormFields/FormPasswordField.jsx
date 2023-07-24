import { useField } from 'formik';
import { useState } from 'react';
import {
  ErrorMessage,
  FormIconContainer,
  FormIconEyeContainer,
  FormInput,
  FormInputContainer,
  SuccessMessage,
} from './FormFields.styled';
import PropTypes from 'prop-types';
import { Icon } from '../../../Icon/Icon';

export const FormPasswordField = ({ successMessage, ...props }) => {
  const [field, meta] = useField(props);
  const invalid = meta.touched && meta.error;
  const valid = meta.touched && !meta.error;

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <FormInputContainer>
        <FormInput
          {...field}
          {...props}
          $invalid={meta.touched && meta.error}
          $valid={meta.touched && !meta.error}
          type={showPassword ? 'text' : 'password'}
        />
        <FormIconEyeContainer
          $touched={meta.touched}
          onClick={toggleShowPassword}
        >
          {showPassword ? (
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
        <ErrorMessage>{meta.error}</ErrorMessage>
        {invalid ? (
          <>
            <FormIconContainer>
              <Icon
                iconName={'icon-cross-small'}
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

FormPasswordField.propTypes = {
  successMessage: PropTypes.string,
};
