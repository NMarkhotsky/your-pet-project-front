import * as Yup from 'yup';

const MAX_SIZE_FILE = 3;
const MAX_LENGTH_MESSAGE = 70;

export const basicValidationMoreInfo = {
  photo: Yup.mixed()
    .required('Pet photo is required')
    .test('fileFormat', 'Only JPG files are allowed', value => {
      if (!value) return false;
      return value.type;
      // return value.type === 'image/jpeg';
    })
    .test(
      'fileSize',
      `File size should not exceed ${MAX_SIZE_FILE} MB`,
      value => {
        if (!value) return false;
        return value.size <= MAX_SIZE_FILE * 1024 * 1024;
      }
    ),
  comments: Yup.string()
    .max(
      MAX_LENGTH_MESSAGE,
      `Maximum message length - ${MAX_LENGTH_MESSAGE} characters`
    )
    .required('Comments are required'),
};
