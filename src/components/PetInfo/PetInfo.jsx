import { petValues } from "../../constants";
import FieldInput from "../FieldInput/FieldInput";

function PetInfo({ formik }) {
  const { option } = formik.values;
  return (
    <>
      {/* <FieldInput
        text="Title of add"
        value={petValues.petName}
        id={petValues.petName}
        onChange={formik.handleChange}
      /> */}
      <FieldInput
        text="Pet’s name"
        name={petValues.petName}
        value={formik.values.petName}
        id={petValues.petName}
        onChange={formik.handleChange}
      />
      <FieldInput
        text="Date of birth"
        name={petValues.dateOfBirth}
        value={formik.values.dateOfBirth}
        id={petValues.dateOfBirth}
        onChange={formik.handleChange}
      />
      <FieldInput
        text="Breed"
        name={petValues.breed}
        value={formik.values.breed}
        id={petValues.breed}
        onChange={formik.handleChange}
      />
    </>
  )
}

export default PetInfo;