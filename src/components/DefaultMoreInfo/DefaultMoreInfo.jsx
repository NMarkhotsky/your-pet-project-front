/* eslint-disable react/prop-types */
import { petValues } from "../../constants";
import Comments from "../Comment/Comment";
import FieldInput from "../FieldInput/FieldInput";
import File from "../File/File";
import GenderRadio from "../GenderRadio/GenderRadio";
import { BackIcon, FemaleIcon, MaleIcon, PawIcon } from "../../icons";
import { getColorGender } from "../../utils";
import { ButtonsWrapper } from "../ChoiseOption/ChoiseOption.styled";
import { ButtonNext, ButtonPrev } from "../StyledButtons/StyledButtons";

function DefaultMoreInfo({ formik, handleDefinePage }) {
  return (
    <form onSubmit={formik.handleSubmit}>
      <GenderRadio
        formik={formik}
        text="Female"
        id="female"
        onChange={formik.handleChange}
        value={petValues.female}
        checked={formik.values.gender}
        icon={<FemaleIcon stroke={getColorGender({ value: petValues.female, formik })} />}
      />
      <GenderRadio
        formik={formik}
        text="Male"
        id="male"
        onChange={formik.handleChange}
        value={petValues.male}
        checked={formik.values.gender}
        icon={<MaleIcon stroke={getColorGender({ value: petValues.male, formik })} />}
      />
      <File formik={formik} />
      <FieldInput
        formik={formik}
        text="Location"
        id="location"
        name="location"
        value={formik.values.location}
        onChange={formik.handleChange}
      />
      <Comments formik={formik} />
      <ButtonsWrapper>
        <ButtonNext type="submit">
          Done
          <PawIcon />
        </ButtonNext>
        <ButtonPrev type="button" onClick={() => handleDefinePage(-1)}>
          <BackIcon />
          Cancel
        </ButtonPrev>
      </ButtonsWrapper>
    </form>
  )
}

export default DefaultMoreInfo;