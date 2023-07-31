/* eslint-disable react/prop-types */
import { useFormik } from 'formik';
import { petValues } from '../../constants';

import DefaultMoreInfo from '../DefaultMoreInfo/DefaultMoreInfo';
import SellMoreInfo from '../SellMoreInfo/SellMoreInfo';
import YourPetMoreInfo from '../YourPetMoreInfo/YourPetMoreInfo';
import { validationYourPet } from '../YourPetMoreInfo/validationYourPet';
import { useAddPet } from '../../hooks';
import { validationDefaultInfo } from '../DefaultMoreInfo/validationDefaultInfo';
import { validationSellInfo } from '../SellMoreInfo/validationSellInfo';
import { useDispatch } from 'react-redux';
import { addNotice, addPet } from '../../redux/add-pet/operations';
import { clearMoreInfo } from '../../redux/add-pet/moreInfoSlice';
import { clearOption } from '../../redux/add-pet/optionSlice';
import { clearPersonalDetails } from '../../redux/add-pet/personalDetailsSlice';
import { Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function MoreInfo({ option, handleDefinePage, setFile, file }) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { personalDetails } = useAddPet();
  const location = useLocation();

  const dispatch = useDispatch();

  const onSubmit = async (values, { resetForm }) => {
    const data = {
      ...values,
      ...personalDetails,
    };

    const { title, ...petObj } = data;

    if (option === petValues.yourPet) {
      dispatch(addPet(petObj));
      resetForm();
      dispatch(clearPersonalDetails());
      dispatch(clearMoreInfo());
      dispatch(clearOption());
      setIsFormSubmitted(true);
      return;
    }

    const { type, gender, ...noticeObj } = data;

    if (option === petValues.SELL) {
      dispatch(
        addNotice({
          noticeType: option,
          sex: data.gender,
          petType: data.type,
          ...noticeObj,
        })
      );
      resetForm();
      dispatch(clearPersonalDetails());
      dispatch(clearMoreInfo());
      dispatch(clearOption());
      setIsFormSubmitted(true);
      return;
    }

    const { price, ...noticeObjWithoutPrice } = noticeObj;

    console.log(title);
    console.log(type);
    console.log(gender);
    console.log(price);

    dispatch(
      addNotice({
        noticeType: option,
        sex: data.gender,
        petType: data.type,
        ...noticeObjWithoutPrice,
      })
    );
    dispatch(clearPersonalDetails());
    dispatch(clearMoreInfo());
    dispatch(clearOption());
    setIsFormSubmitted(true);
    resetForm();
  };

  const formikYourPet = useFormik({
    initialValues: {
      photo: null,
      comments: '',
    },
    onSubmit,
    validationSchema: validationYourPet,
  });

  const formikSellPet = useFormik({
    initialValues: {
      gender: '',
      photo: null,
      location: '',
      price: '',
      comments: '',
    },
    onSubmit,
    validationSchema: validationSellInfo,
  });

  const formikDefault = useFormik({
    initialValues: {
      gender: '',
      photo: null,
      location: '',
      comments: '',
    },
    onSubmit,
    validationSchema: validationDefaultInfo,
  });

  if (isFormSubmitted) {
    return (
      <Navigate
        to={
          (location.state &&
            location.state.from &&
            location.state.from.pathname) ||
          '/notices'
        }
      />
    );
  }

  switch (option) {
    case petValues.yourPet:
      return (
        <YourPetMoreInfo
          setFile={setFile}
          file={file}
          formik={formikYourPet}
          handleDefinePage={handleDefinePage}
        />
      );
    case petValues.SELL:
      return (
        <SellMoreInfo
          setFile={setFile}
          file={file}
          formik={formikSellPet}
          handleDefinePage={handleDefinePage}
        />
      );
    default:
      return (
        <DefaultMoreInfo
          setFile={setFile}
          file={file}
          formik={formikDefault}
          handleDefinePage={handleDefinePage}
        />
      );
  }
}

export default MoreInfo;
