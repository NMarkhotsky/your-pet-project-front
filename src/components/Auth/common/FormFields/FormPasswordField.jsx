import { useField } from 'formik';
import { useState } from 'react';
import {
  FormIconEyeContainer,
  FormPasswordInputContainer,
} from './FormPasswordField.styled';
import PropTypes from 'prop-types';
import { Icon } from '../../../Icon/Icon';
import { FormTextField } from './FormTextField';

export const FormPasswordField = ({ ...props }) => {
  const [field, meta] = useField(props);

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <FormPasswordInputContainer>
        <FormTextField
          {...field}
          {...props}
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
      </FormPasswordInputContainer>
    </>
  );
};

FormPasswordField.propTypes = {
  successMessage: PropTypes.string,
};
