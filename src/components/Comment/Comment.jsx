/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { saveComment } from "../../redux/add-pet/moreInfoSlice";
import ErrorTextAddPet from "../ErrorTextAddPet/ErrorTextAddPet";
import { Label, Textarea } from "./Comment.styled";
import { useAddPet } from "../../hooks";
import { useEffect } from "react";

function Comments({ formik }) {

  const dispatch = useDispatch();

  const { moreInfo } = useAddPet();

  useEffect(() => {
    if (moreInfo.data.comments !== "") {
      formik.setFieldValue("comments", moreInfo.data.comments);
    }
  }, [formik.setFieldValue, moreInfo.data.comments]);

  const handleTextareaChange = (event) => {
    formik.handleChange(event);
    dispatch(saveComment(event.target.textContent));
  };

  const handleTextareaBlur = (event) => {
    formik.handleBlur(event);
  };

  return (
    <Label htmlFor="comments">
      Comments
      <Textarea
        mistake={`${formik.errors.comments && formik.touched.comments}`}
        name="comments"
        id="comments"
        onBlur={handleTextareaBlur}
        onChange={handleTextareaChange}
        value={formik.values.comments}
      ></Textarea>
    {formik.errors.comments && formik.touched.comments ? ( <ErrorTextAddPet text={formik.errors.comments} /> ) : null}
  </Label>
  )
}

export default Comments;