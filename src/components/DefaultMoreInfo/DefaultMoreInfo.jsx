/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { petValues } from '../../constants';
import Comments from '../Comment/Comment';
import FieldInput from '../FieldInput/FieldInput';
import File from '../File/File';
import GenderRadio from '../GenderRadio/GenderRadio';
import { ButtonsWrapper } from '../ChoiseOption/ChoiseOption.styled';
import { ButtonNext, ButtonPrev } from '../StyledButtons/StyledButtons';
import { useAddPet } from '../../hooks';
import {
  saveLocationOrPrice,
  saveSex,
} from '../../redux/add-pet/moreInfoSlice';
import {
  Container,
  FieldContainer,
  FormDefaultMoreInfo,
  RadioContainer,
  RadioWrapper,
  SexContainer,
  SexText,
} from './DefaultMoreInfo.styled';
import { Icon } from '../Icon/Icon';
import { t } from 'i18next';

function DefaultMoreInfo({ formik, handleDefinePage, setFile, file }) {
  const dispatch = useDispatch();

  const { moreInfo } = useAddPet();

  useEffect(() => {
    if (moreInfo.data.sex !== '') {
      formik.setFieldValue('gender', moreInfo.data.sex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.setFieldValue, moreInfo.data.sex]);

  useEffect(() => {
    for (let key in moreInfo.data) {
      if (moreInfo.data[key] !== '') {
        formik.setFieldValue(key, moreInfo.data[key]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.setFieldValue, moreInfo.data]);

  const handleChangeSex = event => {
    formik.handleChange(event);
    dispatch(saveSex(event.target.id));
  };

  const handleChangeInput = event => {
    formik.handleChange(event);

    const { name, value } = event.target;
    dispatch(saveLocationOrPrice({ name, value }));
  };

  return (
    <FormDefaultMoreInfo onSubmit={formik.handleSubmit}>
      <Container>
        <RadioContainer>
          <SexText>{t('addPet_form_moreInfo_theSex')}</SexText>
          <SexContainer>
            <RadioWrapper>
              <GenderRadio
                formik={formik}
                text={t('other_female')}
                id="female"
                onChange={handleChangeSex}
                value={petValues.female}
                checked={formik.values.gender}
                icon={
                  <Icon
                    iconName="icon-female"
                    stroke={
                      formik.values.gender === petValues.female
                        ? '#fff'
                        : formik.values.gender === petValues.male
                        ? '#888888'
                        : '#F43F5E'
                    }
                  />
                }
              />
              <GenderRadio
                formik={formik}
                text={t('other_male')}
                id="male"
                onChange={handleChangeSex}
                value={petValues.male}
                checked={formik.values.gender}
                icon={
                  <Icon
                    iconName="icon-male"
                    stroke={
                      formik.values.gender === petValues.male
                        ? '#fff'
                        : formik.values.gender === petValues.female
                        ? '#888888'
                        : '#54ADFF'
                    }
                  />
                }
              />
            </RadioWrapper>
          </SexContainer>
          <File
            text={t('addPet_form_moreInfo_file')}
            setFile={setFile}
            file={file}
            formik={formik}
          />
        </RadioContainer>
        <FieldContainer>
          <FieldInput
            formik={formik}
            text={t('other_location')}
            id="location"
            name="location"
            placeholder={t('addPet_form_moreInfo_location_placeholder')}
            value={formik.values.location}
            onChange={handleChangeInput}
          />
          <Comments formik={formik} />
        </FieldContainer>
      </Container>
      <ButtonsWrapper>
        <ButtonNext type="submit">
          {t('other_done')}
          <Icon iconName="icon-pawprint" fill="#FFFFFF" />
        </ButtonNext>
        <ButtonPrev type="button" onClick={() => handleDefinePage(-1)}>
          <Icon iconName="icon-arrow-left" stroke="#54adff" />
          {t('other_back')}
        </ButtonPrev>
      </ButtonsWrapper>
    </FormDefaultMoreInfo>
  );
}

export default DefaultMoreInfo;
