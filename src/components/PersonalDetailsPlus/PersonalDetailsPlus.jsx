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
import { t } from 'i18next';

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
        placeholder={t('addPet_form_personalInfo_titleOfAdd')}
        text={t('addPet_form_personalInfo_titleOfAdd')}
        id="title"
        name={'title'}
        onChange={formik.handleChange}
      />
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
      <ButtonsWrapper>
        <ButtonNext disabled={formik.values.option === ''} type="submit">
          {t('other_next')}
          <Icon iconName="icon-pawprint" fill="#FFFFFF" />
        </ButtonNext>
        <ButtonPrev type="button" onClick={() => handleDefinePage(-1)}>
          <Icon iconName="icon-arrow-left" stroke="#54adff" /> {t('other_back')}
        </ButtonPrev>
      </ButtonsWrapper>
    </FormPetInfo>
  );
}

export default PersonalDetailsPlus;
