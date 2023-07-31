/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { setOption } from '../../redux/add-pet/optionSlice';

import ChooseOption from '../ChooseOption/ChooseOption';

import {
  ChooseOptionWrapper,
  MyForm,
  ButtonsWrapper,
} from './ChoiseOption.styled';
import {
  ButtonNext,
  ButtonPrev,
  ButtonPrevLink,
} from '../StyledButtons/StyledButtons';
import { useAddPet } from '../../hooks';
import { Icon } from '../Icon/Icon';

const initialValues = {
  option: '',
};

function ChoiseOption({ handleDefinePage, currentPage }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { option } = useAddPet();

  const onSubmit = values => {
    if (currentPage === 0) {
      dispatch(setOption(values.option));
    }
    handleDefinePage(1);
  };

  const formik = useFormik({ initialValues, onSubmit });

  useEffect(() => {
    if (option !== '') {
      formik.setFieldValue('option', option);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.setFieldValue, option]);

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <ChooseOptionWrapper>
        <ChooseOption formik={formik} />
      </ChooseOptionWrapper>
      <ButtonsWrapper>
        <ButtonNext disabled={formik.values.option === ''} type="submit">
          Next
          <Icon iconName="icon-pawprint" fill="#FFFFFF" />
        </ButtonNext>
        <ButtonPrevLink
          to={
            (location.state &&
              location.state.from &&
              location.state.from.pathname) ||
            '/notices'
          }
        >
          <ButtonPrev type="button">
            <Icon iconName="icon-arrow-left" stroke="#54adff" />
            Cancel
          </ButtonPrev>
        </ButtonPrevLink>
      </ButtonsWrapper>
    </MyForm>
  );
}

export default ChoiseOption;
