/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import { initialStatePersonalDetails } from "../../constants";
import FieldInput from "../FieldInput/FieldInput";
import { validationPersonalDetails } from "./validationPersonalDetails";
import { FormPetInfo } from "../FormPetInfo/FormPetInfo.styled";
import { ButtonNext, ButtonPrev } from "../StyledButtons/StyledButtons";
import { BackIcon, PawIcon } from "../../icons";
import { ButtonsWrapper } from "../ChoiseOption/ChoiseOption.styled";
import { useAddPet } from "../../hooks";
import { useEffect } from "react";

function PersonalDetails({ onSubmit, handleDefinePage }) {

  const { personalDetails } = useAddPet();

  const formik = useFormik({
    initialValues: initialStatePersonalDetails,
    onSubmit,
    validationSchema: validationPersonalDetails,
  });
  
  useEffect(() => {
    for (let key in personalDetails) {
      if (personalDetails[key] !== "") {
        formik.setFieldValue(key, personalDetails[key]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.setFieldValue, personalDetails]);

  return (
    <FormPetInfo onSubmit={formik.handleSubmit}>
      <FieldInput
        formik={formik}
        placeholder="Type name pet"
        text="Pet’s name"
        id="name"
        name={"name"}
        onChange={formik.handleChange}
      />
      <FieldInput
        formik={formik}
        placeholder="Type date of birth"
        text="Date of birth"
        id="birthday"
        date
        name={"birthday"}
        onChange={formik.handleChange}
      />
      <FieldInput
        formik={formik}
        placeholder="Type of pet"
        text="Type"
        id="type"
        name={"type"}
        onChange={formik.handleChange}
      />
      <ButtonsWrapper>
        <ButtonNext type="submit">
          Next
          <PawIcon />
        </ButtonNext>
        <ButtonPrev type="button" onClick={() => handleDefinePage(-1)}>
          <BackIcon />
          Back
        </ButtonPrev>
      </ButtonsWrapper>
    </FormPetInfo>
  )
}

export default PersonalDetails;