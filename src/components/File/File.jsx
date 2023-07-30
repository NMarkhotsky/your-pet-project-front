/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import ErrorTextAddPet from "../ErrorTextAddPet/ErrorTextAddPet";
import PreviewImage from "../PreviewImage/PreviewImage";
import { AddPhoto, InputFile, LabelFile, TextFile } from "./File.styled";
import { savePhoto } from "../../redux/add-pet/moreInfoSlice";
import { useEffect } from "react";
import { useAddPet } from "../../hooks";

function File({ formik, text, direction, items, justify, gap }) {

  const dispatch = useDispatch();

  const { moreInfo } = useAddPet();

  useEffect(() => {
    if (moreInfo.data.photo !== "") {
      formik.setFieldValue("photo", moreInfo.data.photo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.setFieldValue, moreInfo.data.photo]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      formik.setFieldValue("photo", file);

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const photoUrl = reader.result;
        dispatch(savePhoto(photoUrl));
      }
    }
  }

  const isMistake = formik.errors.photo && formik.touched.photo;

  return (
    <>
    <LabelFile
      direction={direction}
      items={items}
      justify={justify}
      gap={gap}
      htmlFor="photo">
      <TextFile>{text}</TextFile>
      <AddPhoto file={formik.values.photo} mistake={`${isMistake}`}>
        {
          formik.values.photo && <PreviewImage file={formik.values.photo} />
        }
      </AddPhoto>
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