/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { petValues } from "../../constants";

import DefaultMoreInfo from "../DefaultMoreInfo/DefaultMoreInfo";
import SellMoreInfo from "../SellMoreInfo/SellMoreInfo";
import YourPetMoreInfo from "../YourPetMoreInfo/YourPetMoreInfo";
import { validationYourPet } from "../YourPetMoreInfo/validationYourPet";
import { useAddPet } from "../../hooks";
import { validationDefaultInfo } from "../DefaultMoreInfo/validationDefaultInfo";
import { validationSellInfo } from "../SellMoreInfo/validationSellInfo";
import { useDispatch } from "react-redux";
import { addNotice, addPet } from "../../redux/add-pet/operations";

function MoreInfo({ option, handleDefinePage }) {
  const { personalDetails } = useAddPet();

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
      return;
    }

    const { type, gender, ...noticeObj } = data;

    if (option === petValues.SELL) {
      dispatch(addNotice({
        noticeType: option,
        sex: data.gender,
        petType: data.type,
        ...noticeObj
      }))
      // resetForm();
      return;
    }

    const { price, ...noticeObjWithoutPrice } = noticeObj;

    dispatch(addNotice({
      noticeType: option,
      sex: data.gender,
      petType: data.type,
      ...noticeObjWithoutPrice
    }))
    // resetForm();
  }

  const formikYourPet = useFormik({
    initialValues: {
      photo: null,
      comments: "",
    },
    onSubmit,
    validationSchema: validationYourPet,
  });

  const formikSellPet = useFormik({
    initialValues: {
      gender: "",
      photo: null,
      location: "",
      price: "",
      comments: "",
    },
    onSubmit,
    validationSchema: validationSellInfo,
  });

  const formikDefault = useFormik({
    initialValues: {
      gender: "",
      photo: null,
      location: "",
      comments: "",
    },
    onSubmit,
    validationSchema: validationDefaultInfo,
  });

  switch (option) {
    case petValues.yourPet:
      return <YourPetMoreInfo formik={formikYourPet} handleDefinePage={handleDefinePage} />
    case petValues.SELL:
      return <SellMoreInfo formik={formikSellPet} handleDefinePage={handleDefinePage} />
    default:
      return <DefaultMoreInfo formik={formikDefault} handleDefinePage={handleDefinePage} />
  }

}

export default MoreInfo;
