import ErrorTextAddPet from "../ErrorTextAddPet/ErrorTextAddPet";
import { GenderInput, LabelGenderInput } from "./GenderRadio.styled";

function GenderRadio({ icon: Icon, text, id, onChange, value, checked, formik }) {

  const isMistake = formik.errors.gender && formik.touched.gender;

  return (
    <>
      <LabelGenderInput htmlFor={id}>
        {Icon}
        <span>{text}</span>
        {isMistake ? ( <ErrorTextAddPet text={formik.errors.gender}/> ) : null}
      </LabelGenderInput>
      <GenderInput
        type="radio"
        name="gender"
        id={id}
        value={value}
        onChange={onChange}
        checked={checked === value}
      />
    </>
  )
}

export default GenderRadio;