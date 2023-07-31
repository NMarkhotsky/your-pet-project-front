/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { petValues } from '../../constants';
import Comments from '../Comment/Comment';
import FieldInput from '../FieldInput/FieldInput';
import File from '../File/File';
import GenderRadio from '../GenderRadio/GenderRadio';
import { getColorGender } from '../../utils';
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
          <SexText>The Sex</SexText>
          <SexContainer>
            <RadioWrapper>
              <GenderRadio
                formik={formik}
                text="Female"
                id="female"
                onChange={handleChangeSex}
                value={petValues.female}
                checked={formik.values.gender}
                icon={
                  <Icon
                    iconName="icon-female"
                    stroke={getColorGender({ value: petValues.female, formik })}
                  />
                }
              />
              <GenderRadio
                formik={formik}
                text="Male"
                id="male"
                onChange={handleChangeSex}
                value={petValues.male}
                checked={formik.values.gender}
                icon={
                  <Icon
                    iconName="icon-male"
                    stroke={getColorGender({ value: petValues.male, formik })}
                  />
                }
              />
            </RadioWrapper>
          </SexContainer>
          <File
            text="Load the pet’s image:"
            setFile={setFile}
            file={file}
            formik={formik}
          />
        </RadioContainer>
        <FieldContainer>
          <FieldInput
            formik={formik}
            text="Location"
            id="location"
            name="location"
            placeholder="Type of location"
            value={formik.values.location}
            onChange={handleChangeInput}
          />
          <Comments formik={formik} />
        </FieldContainer>
      </Container>
      <ButtonsWrapper>
        <ButtonNext type="submit">
          Done
          <Icon iconName="icon-pawprint" fill="#FFFFFF" />
        </ButtonNext>
        <ButtonPrev type="button" onClick={() => handleDefinePage(-1)}>
          <Icon iconName="icon-arrow-left" stroke="#54adff" />
          Back
        </ButtonPrev>
      </ButtonsWrapper>
    </FormDefaultMoreInfo>
  );
}

export default DefaultMoreInfo;
