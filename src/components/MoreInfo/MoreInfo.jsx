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
    const formData = new FormData();
    const entries = Object.entries({
      ...values,
      ...personalDetails,
    });

    let validationObject = {}

    entries.forEach(entry => {
      if (entry[1]) {
        formData.append(entry[0], entry[1]);
        validationObject = {
          ...validationObject,
          [entry[0]]: entry[1],
        };
      }
    });

    const formDataObject = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log(formDataObject);

    if (option === petValues.yourPet) {
      dispatch(addPet(formDataObject));
      // resetForm();
      return;
    }

    dispatch(addNotice(formDataObject))
    resetForm();
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
    onSubmit,
    initialValues: {
      gender: "",
      photo: null,
      location: "",
      price: "",
      comments: "",
    },
    validationSchema: validationSellInfo,
  });

  const formikDefault = useFormik({
    onSubmit,
    initialValues: {
      gender: "",
      photo: null,
      location: "",
      comments: "",
    },
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
