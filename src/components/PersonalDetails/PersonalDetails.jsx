/* eslint-disable react/prop-types */
import { useFormik } from 'formik';
import { initialStatePersonalDetails } from '../../constants';
import FieldInput from '../FieldInput/FieldInput';
import { validationPersonalDetails } from './validationPersonalDetails';
import { FormPetInfo } from '../FormPetInfo/FormPetInfo.styled';
import { ButtonNext, ButtonPrev } from '../StyledButtons/StyledButtons';
import { ButtonsWrapper } from '../ChoiseOption/ChoiseOption.styled';
import { useAddPet } from '../../hooks';
import { useEffect } from 'react';
import { Icon } from '../Icon/Icon';
import { t } from 'i18next';

function PersonalDetails({ onSubmit, handleDefinePage }) {
  const { personalDetails, option } = useAddPet();

  const formik = useFormik({
    initialValues: initialStatePersonalDetails,
    onSubmit,
    validationSchema: validationPersonalDetails,
  });

  useEffect(() => {
    for (let key in personalDetails) {
      if (personalDetails[key] !== '') {
        formik.setFieldValue(key, personalDetails[key]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.setFieldValue, personalDetails]);

  return (
    <FormPetInfo onSubmit={formik.handleSubmit}>
      <FieldInput
        formik={formik}
        placeholder={t('addPet_form_personalInfo_petName_placeholder')}
        text={t('addPet_form_personalInfo_petName')}
        id="name"
        name={'name'}
        onChange={formik.handleChange}
      />
      <FieldInput
        formik={formik}
        placeholder="Type date of birth"
        text={t('user_mypets_petInfo_dateOfBirth')}
        id="birthday"
        date
        name={'birthday'}
        onChange={formik.handleChange}
      />
      <FieldInput
        formik={formik}
        placeholder={t('addPet_form_personalInfo_petType_placeholder')}
        text={t('other_type')}
        id="type"
        name={'type'}
        onChange={formik.handleChange}
      />
      <ButtonsWrapper page={option}>
        <ButtonNext type="submit">
          {t('other_next')}
          <Icon iconName="icon-pawprint" fill="#FFFFFF" />
        </ButtonNext>
        <ButtonPrev type="button" onClick={() => handleDefinePage(-1)}>
          <Icon iconName="icon-arrow-left" stroke="#54adff" />
          {t('other_back')}
        </ButtonPrev>
      </ButtonsWrapper>
    </FormPetInfo>
  );
}

export default PersonalDetails;
