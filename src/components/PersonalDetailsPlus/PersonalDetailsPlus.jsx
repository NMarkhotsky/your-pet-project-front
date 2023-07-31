/* eslint-disable react/prop-types */
import { useFormik } from 'formik';
import FieldInput from '../FieldInput/FieldInput';
import { initialStatePersonalDetailsPlus } from '../../constants';
import { validationPersonalDetailsPlus } from './validationPersonalDetailsPlus';
import { FormPetInfo } from '../FormPetInfo/FormPetInfo.styled';
import { ButtonsWrapper } from '../ChoiseOption/ChoiseOption.styled';
import { ButtonNext, ButtonPrev } from '../StyledButtons/StyledButtons';
import { useEffect } from 'react';
import { useAddPet } from '../../hooks';
import { Icon } from '../Icon/Icon';

function PersonalDetailsPlus({ onSubmit, handleDefinePage }) {
  const { personalDetails } = useAddPet();

  const formik = useFormik({
    initialValues: initialStatePersonalDetailsPlus,
    onSubmit,
    validationSchema: validationPersonalDetailsPlus,
  });

  useEffect(() => {
    for (let key in personalDetails) {
      if (key in personalDetails) {
        formik.setFieldValue(key, personalDetails[key]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormPetInfo onSubmit={formik.handleSubmit}>
      <FieldInput
        formik={formik}
        placeholder="Title of add"
        text="Title of add"
        id="title"
        name={'title'}
        onChange={formik.handleChange}
      />
      <FieldInput
        formik={formik}
        placeholder="Type name pet"
        text="Pet’s name"
        id="name"
        name={'name'}
        onChange={formik.handleChange}
      />
      <FieldInput
        formik={formik}
        placeholder="Type date of birth"
        text="Date of birth"
        id="birthday"
        date
        name={'birthday'}
        onChange={formik.handleChange}
      />
      <FieldInput
        formik={formik}
        placeholder="Type of pet"
        text="Type"
        id="type"
        name={'type'}
        onChange={formik.handleChange}
      />
      <ButtonsWrapper>
        <ButtonNext disabled={formik.values.option === ''} type="submit">
          Next
          <Icon iconName="icon-pawprint" fill="#FFFFFF" />
        </ButtonNext>
        <ButtonPrev type="button" onClick={() => handleDefinePage(-1)}>
          <Icon iconName="icon-arrow-left" stroke="#54adff" /> Back
        </ButtonPrev>
      </ButtonsWrapper>
    </FormPetInfo>
  );
}

export default PersonalDetailsPlus;
