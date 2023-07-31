/* eslint-disable react/prop-types */
import ErrorTextAddPet from "../ErrorTextAddPet/ErrorTextAddPet";
import { Input, Label } from "./FieldInput.styled";

function FieldInput({ text, id, name, onChange, formik, date, placeholder }) {
  const mistake = !!formik.errors[id] && formik.touched[id];

  return (
    <>
      <Label htmlFor={id}>
        <span>{text}</span>
        <Input
            mistake={`${mistake}`}
            name={name}
            type={date ? "date" : "text"}
            id={id}
            value={formik.values[id]}
            onChange={onChange}
            onBlur={formik.handleBlur}
            placeholder={placeholder ? placeholder : ""}
        />
        {formik.errors[id] && formik.touched[id] ? ( <ErrorTextAddPet text={formik.errors[id]} /> ) : null}
      </Label>
    </>
  )
}

export default FieldInput;