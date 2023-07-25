import { petValues } from "../../constants";
import { useAddPet } from "../../hooks";
import FieldRadio from "../FieldRadio/FieldRadio";

function ChooseOption({ formik }) {

  const { option } = useAddPet();

  return (
    <>
      <FieldRadio
        onChange={formik.handleChange}
        text="your pet"
        value={petValues.yourPet}
        // checked={formik.values.option === petValues.yourPet || option === petValues.yourPet}
        checked={formik.values.option === petValues.yourPet}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text="sell"
        value={petValues.SELL}
        // checked={formik.values.option === petValues.SELL || option === petValues.SELL}
        checked={formik.values.option === petValues.SELL}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text="lost/found"
        value={petValues.LOST_FOUND}
        // checked={formik.values.option === petValues.LOST_FOUND || option === petValues.LOST_FOUND}
        checked={formik.values.option === petValues.LOST_FOUND}
      />
      <FieldRadio
        onChange={formik.handleChange}
        text="in good hands"
        value={petValues.IN_GOOD_HANDS}
        // checked={formik.values.option === petValues.IN_GOOD_HANDS || option === petValues.IN_GOOD_HANDS}
        checked={formik.values.option === petValues.IN_GOOD_HANDS}
      />
    </>
  )
};

export default ChooseOption;