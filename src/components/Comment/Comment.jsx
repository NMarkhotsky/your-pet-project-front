/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { saveComment } from '../../redux/add-pet/moreInfoSlice';
import ErrorTextAddPet from '../ErrorTextAddPet/ErrorTextAddPet';
import { Label, Textarea } from './Comment.styled';
import { useAddPet } from '../../hooks';
import { useEffect } from 'react';
import { t } from 'i18next';

function Comments({ formik }) {
  const dispatch = useDispatch();

  const { moreInfo } = useAddPet();

  useEffect(() => {
    if (moreInfo.data.comments !== '') {
      formik.setFieldValue('comments', moreInfo.data.comments);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.setFieldValue, moreInfo.data.comments]);

  const handleTextareaChange = event => {
    formik.handleChange(event);
    dispatch(saveComment(event.target.value));
  };

  const handleTextareaBlur = event => {
    formik.handleBlur(event);
  };

  return (
    <Label htmlFor="comments">
      {t('other_comments')}
      <Textarea
        mistake={`${formik.errors.comments && formik.touched.comments}`}
        name="comments"
        id="comments"
        onBlur={handleTextareaBlur}
        onChange={handleTextareaChange}
        value={formik.values.comments}
      ></Textarea>
      {formik.errors.comments && formik.touched.comments ? (
        <ErrorTextAddPet text={formik.errors.comments} />
      ) : null}
    </Label>
  );
}

export default Comments;
