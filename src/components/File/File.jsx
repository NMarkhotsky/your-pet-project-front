/* eslint-disable react/prop-types */
import ErrorTextAddPet from "../ErrorTextAddPet/ErrorTextAddPet";
import { AddPhoto, InputFile, LabelFile, TextFile } from "./File.styled";

function File({ formik, text, direction, items, justify, gap }) {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("photo", file);
    }
  }

  const isMistake = formik.errors.photo && formik.touched.photo;

  console.log(formik.touched);

  return (
    <>
    <LabelFile
      direction={direction}
      items={items}
      justify={justify}
      gap={gap}
      htmlFor="photo">
      <TextFile>{text}</TextFile>
      <AddPhoto mistake={`${isMistake}`} />
      {isMistake ? ( <ErrorTextAddPet text={formik.errors.photo} /> ) : null}
    </LabelFile>
    <InputFile
        type="file"
        name="photo"
        id="photo"
        accept=".jpg"
        onBlur={formik.handleFileChange}
        onChange={handleFileChange}
      />
    </>
  )
}

export default File;