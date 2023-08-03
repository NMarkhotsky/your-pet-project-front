/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useAddPet } from '../../hooks';
import ErrorTextAddPet from '../ErrorTextAddPet/ErrorTextAddPet';
import PreviewImage from '../PreviewImage/PreviewImage';
import { AddPhoto, InputFile, LabelFile, TextFile } from './File.styled';

function File({ formik, text, direction, items, justify, gap, setFile, file }) {
  const { option } = useAddPet();

  useEffect(() => {
    if (file) {
      formik.setFieldValue('photo', file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.setFieldValue, file]);

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (!file) return;

    formik.setFieldValue('photo', file);
    setFile(file);
  };

  const isMistake = formik.errors.photo && formik.touched.photo;

  return (
    <>
      <LabelFile
        direction={direction}
        items={items}
        justify={justify}
        gap={gap}
        htmlFor="photo"
        value={option}
      >
        <TextFile value={option}>{text}</TextFile>
        <AddPhoto file={formik.values.photo} mistake={`${isMistake}`}>
          {formik.values.photo && <PreviewImage file={formik.values.photo} />}
        </AddPhoto>
        {isMistake ? <ErrorTextAddPet text={formik.errors.photo} /> : null}
      </LabelFile>
      <InputFile
        type="file"
        name="photo"
        id="photo"
        // accept=".jpg"
        onBlur={formik.handleFileChange}
        onChange={handleFileChange}
      />
    </>
  );
}

export default File;
