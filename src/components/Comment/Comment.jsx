import ErrorTextAddPet from "../ErrorTextAddPet/ErrorTextAddPet";
import { Label, Textarea } from "./Comment.styled";

function Comments({ formik }) {
  const handleTextareaChange = (event) => {
    formik.handleChange(event);
  };

  const handleTextareaBlur = (event) => {
    formik.handleBlur(event);
  };

  console.log(formik.touched)
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