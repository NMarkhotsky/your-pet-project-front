/* eslint-disable react/prop-types */
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
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
import { BackIcon, PawIcon } from '../../icons';
import { useEffect } from 'react';
import { useAddPet } from '../../hooks';

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
          <PawIcon />
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
            <BackIcon />
            Cancel
          </ButtonPrev>
        </ButtonPrevLink>
      </ButtonsWrapper>
    </MyForm>
  );
}

export default ChoiseOption;
