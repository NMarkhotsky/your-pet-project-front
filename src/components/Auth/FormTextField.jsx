import { useField } from 'formik';
import PropTypes from 'prop-types';

export const FormTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

FormTextField.propTypes = {
  label: PropTypes.string.isRequired,
};
