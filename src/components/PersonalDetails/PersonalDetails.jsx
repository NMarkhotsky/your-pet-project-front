import { useFormik } from "formik";
import { initialStatePersonalDetails } from "../../constants";
import FieldInput from "../FieldInput/FieldInput";
import { validationPersonalDetails } from "./validationPersonalDetails";
import { FormPetInfo } from "../FormPetInfo/FormPetInfo.styled";
import { ButtonNext, ButtonPrev } from "../StyledButtons/StyledButtons";
import { BackIcon, PawIcon } from "../../icons";
import { ButtonsWrapper } from "../ChoiseOption/ChoiseOption.styled";

function PersonalDetails({ onSubmit, handleDefinePage }) {

  const formik = useFormik({
    initialValues: initialStatePersonalDetails,
    onSubmit,
    validationSchema: validationPersonalDetails,
  });

  return (
    <FormPetInfo onSubmit={formik.handleSubmit}>
      <FieldInput
        formik={formik}
        placeholder="Type name pet"
        text="Pet’s name"
        id="name"
        name={"name"}
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <FieldInput
        formik={formik}
        placeholder="Type date of birth"
        text="Date of birth"
        id="birthday"
        date
        value={formik.values.birthday}
        name={"birthday"}
        onChange={formik.handleChange}
      />
      <FieldInput
        formik={formik}
        placeholder="Type of pet"
        text="Type"
        id="type"
        value={formik.values.type}
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
          Cancel
        </ButtonPrev>
      </ButtonsWrapper>
    </FormPetInfo>
  )
}

export default PersonalDetails;